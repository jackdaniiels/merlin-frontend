import { Logout } from "./Logout";

import profileStyles from '@styles/profile.module.scss';

export const Profile = () => {
    return (
        <div className={profileStyles.profile}>
            <div className={profileStyles.profile__info}>
                <img className={profileStyles.profile__avatar} src="/user_icon.svg" alt="User" />
                <span className={profileStyles.profile__name}>Felipe M.</span>
            </div>
            <Logout />
        </div>
    )
}
