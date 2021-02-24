import { createContext, useState, ReactNode } from 'react';
import challanges from '../../challenges.json';

interface ChallangesProviderProps {
    children: ReactNode
}

interface Challange {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallangesContextData {
    level: number,
    currentExperience: number,
    challangesCompleted: number,
    activeChallange: Challange,
    levelUp: () => void,
    startNewChallange: () => void
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);
    const [activeChallange, setActiveChallange] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallange() {

        const ramdomChallangeIndex = Math.floor(Math.random() * challanges.length);

        const challange = challanges[ramdomChallangeIndex];

        setActiveChallange(challange);

        console.log('New Challange');
        console.log(challange);
    }

    return (<ChallangesContext.Provider
        value={{
            level,
            currentExperience,
            challangesCompleted,
            activeChallange,
            levelUp,
            startNewChallange
        }}>
        {children}
    </ChallangesContext.Provider>);
}

