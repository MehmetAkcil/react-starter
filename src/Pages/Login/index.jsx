import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../Api/AuthApi';
import {login as reduxLogin} from '../../Store/AuthStore.js';
import {toastError} from '../../Utils/toast';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if (email === '' || password === '') {
            return toastError('Lütfen tüm alanları doldurunuz.');
        }

        if (!email.includes('@')) {
            return toastError('Lütfen geçerli bir email adresi giriniz.');
        }

        if (password.length < 6) {
            return toastError('Şifreniz en az 6 karakter olmalıdır.');
        }

        await login(email, password, dispatch, reduxLogin)
    }


    return (
        <>
            <input className="border mb-3" type="email" placeholder='name@example.com' id="email"
                   onChange={e => setEmail(e.target.value)}/>
            <input className="border mb-3" type="password" placeholder='**********' id="password"
                   onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>
                Giriş Yap
            </button>
        </>
    )
}

export default Login;