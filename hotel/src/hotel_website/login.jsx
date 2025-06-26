import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebase/firebase_config';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!email.trim()) {
            newErrors.email = "Email обязателен";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Неверный формат email";
        }
        if (!password) {
            newErrors.password = "Пароль обязателен";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        setLoading(true);
        try {
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await response.json();
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                alert("Вход выполнен успешно!");
                navigate("/profile");
            } else {
                setErrors({ general: "Неверный email или пароль" });
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            setErrors({ general: "Ошибка сети или API недоступен" });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            // Store user info in localStorage
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            };
            localStorage.setItem("user", JSON.stringify(userData));
            
            alert("Вход через Google выполнен успешно!");
            navigate("/profile");
        } catch (error) {
            console.error("Ошибка Google авторизации:", error);
            setErrors({ general: "Ошибка входа через Google" });
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Вход в систему</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {errors.general && (
                                    <div className="alert alert-danger" role="alert">
                                        {errors.general}
                                    </div>
                                )}
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Введите ваш email"
                                        disabled={loading}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Пароль</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Введите ваш пароль"
                                            disabled={loading}
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            disabled={loading}
                                        >
                                            {showPassword ? "Скрыть" : "Показать"}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Вход...
                                            </>
                                        ) : (
                                            "Войти"
                                        )}
                                    </button>
                                    
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={handleGoogleSignIn}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Вход через Google...
                                            </>
                                        ) : (
                                            "Войти через Google"
                                        )}
                                    </button>
                                </div>
                            </form>
                            
                            <div className="text-center mt-3">
                                <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
                                <p><a href="/forgot-password">Забыли пароль?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}