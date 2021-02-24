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
    levelUp: () => void,
    startNewChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [ChallengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

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

    function resetChallenge(){}

    return (<ChallengesContext.Provider
        value={{
            level,
            currentExperience,
            ChallengesCompleted,
            activeChallenge,
            levelUp,
            startNewChallenge
        }}>
        {children}
    </ChallengesContext.Provider>);
}

