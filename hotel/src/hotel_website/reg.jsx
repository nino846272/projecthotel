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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Имя обязательно";
        if (!form.email.trim()) newErrors.email = "Email обязателен";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Неверный формат email";
        if (!form.password) newErrors.password = "Пароль обязателен";
        else if (form.password.length < 6) newErrors.password = "Пароль должен быть не менее 6 символов";
        if (form.password !== confirmPassword) newErrors.confirmPassword = "Пароли не совпадают";
        if (!form.phone.trim()) newErrors.phone = "Телефон обязателен";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            const checkResponse = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await checkResponse.json();

            if (users.some(user => user.email === form.email)) {
                setErrors({ ...errors, email: "Пользователь с таким email уже существует" });
                setLoading(false);
                return;
            }
                
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                alert("Регистрация успешна!");
                navigate("/login");
            } else {
                alert("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен");
        } finally {
            setLoading(false);
        }
    };

    // ======= Google Logic =======

    const checkUser = async (uid, userDetail) => {
        try {
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await response.json();
            const user = users.find(u => u.uid === uid);

            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/profile");
            } else {
                await registerGoogleUser(userDetail);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен");
        }
    };

    const registerGoogleUser = async (userDetail) => {
        const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: userDetail.email,
                password: "",
                uid: userDetail.uid,
                name: userDetail.displayName,
                avatar: userDetail.photoURL,
            }),
        });

        if (response.ok) {
            alert("Регистрация через Google успешна!");
            navigate("/profile");
        } else {
            alert("Ошибка при регистрации");
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

    // ============================

    return (
        <div className="">
            <div className="container">
                <header className="d-flex justify-content-between align-items-center p-3 shadow">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                    <nav>
                        <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li className="nav-item"><a href="/" className="nav-link text-dark font"><h5><b>Домашняя страница</b></h5></a></li>
                            <li className="nav-item"><a href="/explore" className="nav-link font text-dark"><h5><b>Исследовать</b></h5></a></li>
                            <li className="nav-item"><a href="/rooms" className="nav-link text-dark font"><h5><b>Комнаты</b></h5></a></li>
                            <li className="nav-item"><a href="/about" className="nav-link text-dark font"><h5><b>О нас</b></h5></a></li>
                            <li className="nav-item"><a href="/contactus" className="nav-link text-dark font"><h5><b>Контакты</b></h5></a></li>
                            <li className="nav-item"><a href="/registra" className="nav-link text-dark font"><h5>Регистрация/Вход</h5></a></li>
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
                </header>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card shadow">
                            <div className="card-header bg-light">
                                <h2>Регистрация</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Имя</label>
                                        <input
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            name="name"
                                            id="name"
                                            placeholder="Имя"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Пароль</label>
                                        <input
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            name="password"
                                            id="password"
                                            type="password"
                                            placeholder="Пароль"
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
                                        <input
                                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Подтвердите пароль"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Телефон</label>
                                        <input
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            name="phone"
                                            id="phone"
                                            placeholder="Телефон"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >
                                        {loading ? "Регистрация..." : "Зарегистрироваться"}
                                    </button>
                                </form>

                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-danger w-100 mt-3"
                                >
                                    Зарегистрироваться через Google
                                </button>

                                <p className="mt-3 text-center">
                                    Уже есть аккаунт? <span
                                        className="text-primary"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate("/login")}
                                    >
                                        Войти
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
