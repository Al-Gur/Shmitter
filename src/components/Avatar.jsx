import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar,  changeName} = useContext(TwitterContext);

    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name} 
	     onClick={() => changeAvatar(prompt("Enter URL for the avatar:"))}
	     onContextMenu={(e) => {changeName(prompt("Enter new name:")); e.preventDefault();}}
    	/>
    );
};

export default Avatar;