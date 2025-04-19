import React, { use, useState } from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebase/firebase_config'; // Импортируем Firebase аутентификацию

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                alert("Неверный email или пароль");
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен");
        } finally {
            setLoading(false);
        }
    };
    const checkUser = async (uid,userDetail) => {

        try {
            const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users");
            const users = await response.json();
            const user = users.find(u => u.uid === uid);

            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/profile");
            } else {
                Register(userDetail);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            alert("Ошибка сети или API недоступен");
        } finally {
            setLoading(false);
        }
    };
    const Register = async (userDetail) => {
        console.log('userdetail',userDetail);
        
        // Регистрация нового пользователя
        const response = await fetch("https://67cc190f3395520e6af72555.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userDetail.email,
                password: userDetail.password,
                uid: userDetail.uid,
                name: userDetail.displayName,
                avatar: userDetail.photoURL,
            }),
        });
        console.log(response);
        
        if (response.ok) {
            navigate("/login");
        } else {
            alert("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
        }
    }
    // Логика для входа через Google
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            let res = await signInWithPopup(auth, provider);
            console.log('user', res);
            checkUser(res.user.uid,res.user);
        } catch (error) {
            console.error("Ошибка авторизации через Google:", error);
            alert("Ошибка при входе через Google");
        }
    };
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
                            <li className=""></li>
                            <li className="nav-item"><a href="/registra" className="nav-link text-dark font"><h5>Регистрация/Вход</h5></a></li>
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
                </header>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card shadow">
                                <div className="card-header bg-light">
                                    <h3>Вход</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Пароль</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Пароль"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={loading}
                                        >
                                            {loading ? "Загрузка..." : "Войти"}
                                        </button>
                                    </form>
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn btn-danger w-100 mt-3"
                                    >
                                        Войти через Google
                                    </button>
                                    <p className="mt-3 text-center">
                                        Нет аккаунта? <span
                                            className="text-primary"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => navigate("/registra")}
                                        >
                                            Регистрация
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-light py-4 w-100 mt-5" style={{ backgroundColor: "#8b6f48", width: "100%" }}>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="fw-bold">Paradise view</h5>
                            <p>
                                Сервис в отеле Monteleone был исключительным. Не было ни одной проблемы, которая не была бы решена вовремя и с удовлетворительным результатом. Персонал особенно впечатлил своей способностью предугадывать наши потребности.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold">Быстрые ссылки</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Бронирование номеров</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Номера</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Контакты</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Исследовать</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold">Компания</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Политика конфиденциальности</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Политика возврата</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Частые вопросы</a></li>
                                <li><a href="#" className="text-light text-decoration-none">О нас</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">Paradise view 2023</div>
                </div>
            </footer>
        </div>
    );
}
