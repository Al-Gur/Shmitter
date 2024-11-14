import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    });

    const changeAvatar = avatar => {
	setUser( prevState => ({...prevState, avatar: avatar || prevState.avatar}) );
    }

    const changeName = name => {
	setUser( prevState => ({...prevState, name: name || prevState.name}) );
    }

    const changeFollowers = followers => {
     	if (followers >= 0)
          setStats( prevState => ({...prevState, followers }) );
    } 

    const changeFollowing = following => {
     	if (following >= 0)
          setStats( prevState => ({...prevState, following }) );
    } 

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, changeAvatar,  changeName, stats, changeFollowers, changeFollowing
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
