import {useContext} from "react";
import {TwitterContext} from "../utils/context.ts";

interface AvatarProps {
    size?: string;
}
const Avatar = ({size}: AvatarProps) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);
    // user, changeAvatar, changeName - выдает ошибку не могу понять как ее решить

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;