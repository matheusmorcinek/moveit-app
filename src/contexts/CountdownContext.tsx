import { Children, createContext, ReactNode } from "react";

interface CountdownProviderProps {
    children: ReactNode
}

interface CountdownContextData {

}

const CountdownContext = createContext({} as CountdownContextData);


export function CountdownProvider({ children }) {

    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    );
}