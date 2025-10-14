
import logoutStyles from '@styles/logout.module.scss';


export const Logout = () => {

    const handleLogout = () => {
        console.log('Logout');
    }


    return (
        <div className={logoutStyles.logout} onClick={handleLogout}>
            <span className={logoutStyles.logout__text}>Salir</span>
            <img className={logoutStyles.logout__icon} src="/logout_icon.svg" alt="Logout" />
        </div>
    )
}
