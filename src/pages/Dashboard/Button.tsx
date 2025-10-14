
import buttonStyles from '@styles/button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
    return (
        <button className={buttonStyles.button} disabled={disabled} onClick={onClick}>{children}</button>
    )
}
