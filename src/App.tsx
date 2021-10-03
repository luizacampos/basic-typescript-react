import React, { FC, createContext } from "react";
import "./App.css";
import { Person } from "./components/Person";
import { PersonFC, HairColor } from "./components/PersonFC";

interface AppContextInterface {
    username: string;
    password: string;
    loggedIn: boolean;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
    const contextValue: AppContextInterface = {
        username: "lulu",
        password: "123",
        loggedIn: true,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <Person name="Luiza" email="luiza@gmail.com" />
                <PersonFC
                    name="Thiago"
                    email="thiago@gmail.com"
                    hairColor={HairColor.Brown}
                />
            </div>
        </AppContext.Provider>
    );
};

export default App;
