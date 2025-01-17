import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div 
		      onClick={() => changeFollowers(stats.followers + 1)}
		      onContextMenu={(e) => {changeFollowers(stats.followers - 1); e.preventDefault();}}
		>
                    Followers: {stats.followers}
                </div>
                <div 
		      onClick={() => changeFollowing(stats.following + 1)}
		      onContextMenu={(e) => {changeFollowing(stats.following - 1); e.preventDefault();}}
		>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;