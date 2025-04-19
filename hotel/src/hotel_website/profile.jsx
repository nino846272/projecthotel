import React, { useState, useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {
            name: "Иван Иванов",
            email: "ivan@example.com",
            phone: "+1234567890",
            password: "password123"
        };
        setUser(storedUser);
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        localStorage.setItem("user", JSON.stringify(user));
        setIsEditing(false);
        alert("Данные сохранены!");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
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
                            <li className="nav-item"><a href="/registra" className="nav-link text dark font"><h5>Регистрация/Вход</h5></a></li>
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
                </header>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card shadow">
                                <div className="card-header bg-light d-flex justify-content-between align-items-center">
                                    <h3>Профиль пользователя</h3>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={handleLogout}
                                    >
                                        Выйти
                                    </button>
                                </div>
                                <div className="container mt-4 mb-4">
                                    <h2>Профиль</h2>
                                    <div className="mb-3">
                                        <label className="form-label">Имя</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Телефон</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Пароль</label>
                                        <div className="input-group">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                                name="password"
                                                value={user.password}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                            />
                                            {isEditing && (
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? "Скрыть" : "Показать"}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {isEditing ? (
                                        <button className="btn btn-success" onClick={handleSave}>Сохранить</button>
                                    ) : (
                                        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Редактировать</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-light py-4 w-100" style={{ backgroundColor: "#8b6f48", width: "100%" }}>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="fw-bold">Paradise View</h5>
                            <p>
                                Обслуживание в отеле Monteleone было исключительным. Не было
                                ни одной проблемы, которая бы не была решена своевременно и с
                                удовлетворительным результатом. Команда особенно впечатлила тем, как
                                персонал отеля предвидел наши потребности.
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
                                <li><a href="#" className="text-light text-decoration-none">Часто задаваемые вопросы</a></li>
                                <li><a href="#" className="text-light text-decoration-none">О нас</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold">Социальные сети</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
                                <li><a href="#" className="text-light text-decoration-none">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold">Рассылка</h6>
                            <p>Подпишитесь на нашу рассылку, чтобы получать актуальные предложения.</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Введите ваш email" />
                                <button className="btn btn-light" type="button">Подписаться</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">Paradise View 2023</div>
                </div>
            </footer>
        </div>
    );
}