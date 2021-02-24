import { createContext, useState, ReactNode } from 'react';

interface ChallangesProviderProps {
    children: ReactNode
}

interface ChallangesContextData {
    level: number,
    currentExperience: number,
    levelUp: () => void,
    challangeCompleted: number,
    startNewChallange: () => void
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallange() {
        console.log('New Challange');
    }

    return (<ChallangesContext.Provider
        value={{
            level,
            currentExperience,
            challangesCompleted,
            levelUp,
            startNewChallange
        }}>
        {children}
    </ChallangesContext.Provider>);
}

