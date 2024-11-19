
import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";
import {InfoTwitterContext} from "./utils/types";

type ChangeStats = (statsType: "followers" | "following", sum: number) => void;
function App() {

    const [user, setUser] =
        useState<Partial<InfoTwitterContext["user"]>>({
        name: "Monster",
        avatar: "https://gravatar.com/avatar/000?d=monsterid",
    });

    const [stats, setStats] =
        useState<InfoTwitterContext["stats"]>({
        followers: 10,
        following: 100,
    });

    const changeAvatar = (url:string )=> {
        setUser(prevState =>
            ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name:string) => {
        setUser(prevState =>
            ({ ...prevState, name: name || prevState.name }))
    }

    const changeStats: ChangeStats = (statsType, sum) => {
        setStats((stats) => {
            let res = stats[statsType] + sum;
            res = res < 0 ? 0 : res;
            return { ...stats, [statsType]: res };
        })
    }
    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats,
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
