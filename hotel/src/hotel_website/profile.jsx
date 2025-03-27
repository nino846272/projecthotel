import React, { useState, useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user from localStorage when component mounts
        const storedUser = localStorage.getItem("user");
        
        if (storedUser) {
            // Parse the stored user data
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        } else {
            // If no user is logged in, redirect to login page
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove user from localStorage and redirect to login
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="">
            <div className="container">
                <header className="d-flex justify-content-between align-items-center p-3 shadow">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                    <nav>
                        <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li className="nav-item"><a href="/" className="nav-link text-dark font"><h5><b>Домашняя страница</b></h5></a></li>
                            <li className="nav-item"><a href="#" className="nav-link font text-dark"><h5><b>Исследовать</b></h5></a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark font"><h5><b>Комнаты</b></h5></a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark font"><h5><b>О нас</b></h5></a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-dark font"><h5><b>Контакты</b></h5></a></li>
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Забронировать</button>
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
                                <div className="card-body">
                                    <div className="mb-3">
                                        <strong>Имя:</strong> {user.name}
                                    </div>
                                    <div className="mb-3">
                                        <strong>Email:</strong> {user.email}
                                    </div>
                                    <div className="mb-3">
                                        <strong>Телефон:</strong> {user.phone}
                                    </div>
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
    )
}