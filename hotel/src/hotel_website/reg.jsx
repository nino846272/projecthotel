import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, GoogleAuthProvider, signInWithPopup } from "../firebase/firebase_config";

export default function Reg() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (errors.confirmPassword) {
            setErrors({ ...errors, confirmPassword: null });
        }
    };

    const validate = () => {
        const newErrors = {};
        
        // Валидация имени
        if (!form.name.trim()) {
            newErrors.name = "Имя обязательно";
        } else if (form.name.trim().length < 2) {
            newErrors.name = "Имя должно содержать минимум 2 символа";
        }
        
        // Валидация email
        if (!form.email.trim()) {
            newErrors.email = "Email обязателен";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Неверный формат email";
        }
        
        // Валидация пароля
        if (!form.password) {
            newErrors.password = "Пароль обязателен";
        } else if (form.password.length < 6) {
            newErrors.password = "Пароль должен быть не менее 6 символов";
        } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(form.password)) {
            newErrors.password = "Пароль должен содержать как минимум одну букву и одну цифру";
        }
        
        // Валидация подтверждения пароля
        if (!confirmPassword) {
            newErrors.confirmPassword = "Подтверждение пароля обязательно";
        } else if (form.password !== confirmPassword) {
            newErrors.confirmPassword = "Пароли не совпадают";
        }
        
        // Валидация телефона
        if (!form.phone.trim()) {
            newErrors.phone = "Телефон обязателен";
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(form.phone.trim())) {
            newErrors.phone = "Неверный формат телефона";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            // Проверяем, существует ли пользователь с таким email
            const checkResponse = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await checkResponse.json();

            if (users.some(user => user.email === form.email)) {
                setErrors({ email: "Пользователь с таким email уже существует" });
                setLoading(false);
                return;
            }
                
            // Регистрируем нового пользователя
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    createdAt: new Date().toISOString(),
                    isVerified: false // можно добавить верификацию email в будущем
                }),
            });

            if (response.ok) {
                const newUser = await response.json();
                alert("Регистрация успешна! Теперь вы можете войти в систему.");
                navigate("/login");
            } else {
                const error = await response.json();
                alert(`Ошибка при регистрации: ${error.message || 'Неизвестная ошибка'}`);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен. Пожалуйста, попробуйте позже.");
        } finally {
            setLoading(false);
        }
    };

    // Google Authentication Logic
    const checkUser = async (uid, userDetail) => {
        setLoading(true);
        try {
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await response.json();
            const existingUser = users.find(u => u.uid === uid);

            if (existingUser) {
                localStorage.setItem("user", JSON.stringify(existingUser));
                alert("Вход выполнен успешно!");
                navigate("/profile");
            } else {
                await registerGoogleUser(userDetail);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен");
        } finally {
            setLoading(false);
        }
    };

    const registerGoogleUser = async (userDetail) => {
        try {
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: userDetail.email,
                    password: "",
                    uid: userDetail.uid,
                    name: userDetail.displayName,
                    avatar: userDetail.photoURL,
                    phone: "",
                    createdAt: new Date().toISOString(),
                    isVerified: true // Google аккаунты считаем верифицированными
                }),
            });

            if (response.ok) {
                const newUser = await response.json();
                localStorage.setItem("user", JSON.stringify(newUser));
                alert("Регистрация через Google успешна!");
                navigate("/profile");
            } else {
                alert("Ошибка при регистрации через Google");
            }
        } catch (error) {
            console.error("Ошибка при регистрации:", error);
            alert("Ошибка при регистрации через Google");
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, provider);
            await checkUser(res.user.uid, res.user);
        } catch (error) {
            console.error("Ошибка входа через Google:", error);
            alert("Ошибка входа через Google");
        }
    };

    return (
        <div className="">
            <header className="d-flex justify-content-between align-items-center p-3 shadow" style={{ backgroundColor: '#7C6A46' }}>
                <a href="/" className="navbar-brand logo-hover">
                    <img src="/logowhite.png" alt="Logo" height="40" />
                </a>
                <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li className="nav-item"><a href="/" className="nav-link text-white nav-link nav-hover nav-btn">Главная</a></li>
                    <li className="nav-item"><a href="/bookings" className="nav-link text-white nav-link nav-hover nav-btn">Забронированные</a></li>
                    <li className="nav-item"><a href="/login" className="nav-link text-white nav-link nav-hover nav-btn">Вход</a></li>
                </ul>
            </header>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card shadow">
                            <div className="card-header bg-light">
                                <h2>Регистрация</h2>
                                <p className="mb-0 text-muted">Создайте свой аккаунт для бронирования отелей</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Полное имя *</label>
                                        <input
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            name="name"
                                            id="name"
                                            placeholder="Введите ваше полное имя"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email адрес *</label>
                                        <input
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="example@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Пароль *</label>
                                        <div className="input-group">
                                            <input
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                name="password"
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Минимум 6 символов"
                                                value={form.password}
                                                onChange={handleChange}
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? "Скрыть" : "Показать"}
                                            </button>
                                        </div>
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        <div className="form-text">Пароль должен содержать как минимум одну букву и одну цифру</div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль *</label>
                                        <div className="input-group">
                                            <input
                                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Повторите пароль"
                                                value={confirmPassword}
                                                onChange={handleConfirmPasswordChange}
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? "Скрыть" : "Показать"}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Номер телефона *</label>
                                        <input
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            name="phone"
                                            id="phone"
                                            placeholder="+7 (999) 123-45-67"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 mb-3"
                                        disabled={loading}
                                        style={{ backgroundColor: '#7C6A46', borderColor: '#7C6A46' }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Регистрация...
                                            </>
                                        ) : "Зарегистрироваться"}
                                    </button>
                                </form>

                                <div className="text-center mb-3">
                                    <span className="text-muted">или</span>
                                </div>

                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-danger w-100 mb-3"
                                    disabled={loading}
                                >
                                    <svg className="me-2" width="16" height="16" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    Зарегистрироваться через Google
                                </button>

                                <p className="text-center mb-0">
                                    Уже есть аккаунт? <span
                                        className="text-primary"
                                        style={{ cursor: "pointer", textDecoration: "underline" }}
                                        onClick={() => navigate("/login")}
                                    >
                                        Войти
                                    </span>
                                </p>
                                
                                <small className="text-muted d-block text-center mt-3">
                                    Регистрируясь, вы соглашаетесь с нашими условиями использования и политикой конфиденциальности
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}