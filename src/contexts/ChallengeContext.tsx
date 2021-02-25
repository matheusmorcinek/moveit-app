import { createContext, useState, ReactNode, useEffect } from 'react';
import Challenges from '../../challenges.json';

interface ChallengesProviderProps {
    children: ReactNode
}

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completeChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);

    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    //toda vez que algo mudar, executamos uma função. Side effects...
    useEffect(() => {

        //https://developer.mozilla.org/en-US/docs/Web/API/Notification
        Notification.requestPermission();
    }, []);
    //obs: quando um useEffect tem o segundo parametro vazio, ele será executando UMA unica vez quando o componente é exibido em tela.

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {

        const ramdomChallengeIndex = Math.floor(Math.random() * Challenges.length);

        const challenge = Challenges[ramdomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {

            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            });
        }
    }

    function resetChallenge() {
        console.log('reseting challenge');
    }

    function completeChallenge() {

        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {

            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (<ChallengesContext.Provider
        value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge
        }}>
        {children}
    </ChallengesContext.Provider>);
}

