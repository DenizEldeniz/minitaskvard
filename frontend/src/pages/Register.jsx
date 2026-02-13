import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (username.length < 3 || username.length > 20) {
            setError('Kullanıcı adı 3-20 karakter olmalıdır.');
            return;
        }
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
            setError('Kullanıcı adı sadece harf ve rakam içerebilir.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setError('Geçerli bir email adresi giriniz.');
            return;
        }

        if (password.length < 6) {
            setError('Şifre en az 6 karakter olmalıdır.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Şifre en az 1 büyük harf içermelidir.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Şifre en az 1 küçük harf içermelidir.');
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('Şifre en az 1 rakam içermelidir.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Kayıt başarısız.');
                setLoading(false);
                return;
            }

            setSuccess('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...');
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            setError('Sunucuya bağlanılamadı. Backend çalışıyor mu?');
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-icon">✨</div>
                    <h1>Kayıt Ol</h1>

                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Kullanıcı Adı</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="kullaniciadi"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="ornek@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading && <span className="spinner"></span>}
                        {loading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
                    </button>
                </form>

                <div className="auth-footer">
                    Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
