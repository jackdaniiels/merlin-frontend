import { NavLink } from "react-router-dom";
import errorPageStyles from '@styles/error_page.module.scss';

const ErrorPage = () => {

    return (
        <div className={errorPageStyles.error_page}>
            <h1 className={errorPageStyles.error_page__title}>Oops!</h1>
            <p className={errorPageStyles.error_page__message}>
                Ha ocurrido un error inesperado.
            </p>
            <NavLink className={errorPageStyles.error_page__button} to="/">
                Regresar
            </NavLink>
        </div>
    );
};

export default ErrorPage;
