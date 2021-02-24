import { createContext, useState, ReactNode } from 'react';
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
    ChallengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    
    const [ChallengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {

        const ramdomChallengeIndex = Math.floor(Math.random() * Challenges.length);

        const Challenge = Challenges[ramdomChallengeIndex];

        setActiveChallenge(Challenge);

        console.log('New Challenge');
        console.log(Challenge);
    }

    function resetChallenge() {
        console.log('reseting challenge');
    }

    return (<ChallengesContext.Provider
        value={{
            level,
            currentExperience,
            ChallengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge
        }}>
        {children}
    </ChallengesContext.Provider>);
}

