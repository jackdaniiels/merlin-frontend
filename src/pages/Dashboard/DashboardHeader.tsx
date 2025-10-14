import headerStyles from '../../styles/header.module.scss';
import { Logo } from './Logo';
import { Profile } from './Profile';


export const DashboardHeader = () => {
    return (
        <header className={headerStyles.header}>
            <Logo />
            <Profile />
        </header>
    )
}
