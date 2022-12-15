import {useState, createContext, useContext} from 'react';

const ChaosModeContext = createContext();

export const useChaosModeContext = () => useContext(ChaosModeContext);

export const ChaosModeProvider = (props) => {

    const [chaosMode, setChaosMode] = useState(false);

    const toggleChaosMode = () => {
        setChaosMode(!chaosMode);
        if(!chaosMode) {
            document.body.classList.add("chaosMode");

        } else {
            document.body.classList.remove("chaosMode");
        }
    }

    return (
        <ChaosModeContext.Provider value={{chaosMode, toggleChaosMode}}>
            {props.children}
        </ChaosModeContext.Provider>
    );

};