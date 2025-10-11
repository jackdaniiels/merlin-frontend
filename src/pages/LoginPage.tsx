import { useNavigate } from 'react-router'

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Login OK');
        void navigate('/home');
    }

    return (
        <>
            <div>LoginPage</div>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default LoginPage