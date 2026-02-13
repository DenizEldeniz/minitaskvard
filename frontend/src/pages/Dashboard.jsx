import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'Kullanıcı';

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <div className="welcome-page">
            <div className="welcome-content">
                <h1 className="welcome-title">Hoşgeldin, {username}!</h1>
                <button className="btn-logout" onClick={handleLogout}>
                    Çıkış Yap
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
