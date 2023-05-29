import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { offlineLoginUser } from '../../Api/AuthApi';
import { login as reduxLogin } from '../../Store/AuthStore';
import { validEmail } from '../../Utils/Validate';
import { toastError } from '../../Utils/toast';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (email === '' || password === '') {
            return toastError('Lütfen tüm alanları doldurunuz.');
        }

        if (!validEmail(email)) {
            return toastError('Lütfen geçerli bir email adresi giriniz.');
        }

        if (password.length < 6) {
            return toastError('Şifreniz en az 6 karakter olmalıdır.');
        }

        offlineLoginUser(email, password, dispatch, reduxLogin)
    }


    return (
        <div className="container my-5">
            <div className="mb-3">
                <h3>
                    Giriş Yap
                </h3>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder='isim@ornek.com' id="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Parola</label>
                <input type="password" className="form-control" id="password" placeholder='**********' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>Giriş Yap</button>
            </div>
        </div>
    )
}

export default Login;