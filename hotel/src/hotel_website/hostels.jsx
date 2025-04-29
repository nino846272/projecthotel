import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "https://67cc190f3395520e6af72555.mockapi.io/hotel";

const HostelViewPage = () => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(apiUrl);
            setHostels(res.data);
            setError(null);
        } catch (error) {
            console.error("Ошибка загрузки:", error);
            setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center p-3 shadow">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                <nav>
                    <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <li className="nav-item"><a href="/" className="nav-link text-dark font"><h5><b>Домашняя страница</b></h5></a></li>
                        <li className="nav-item"><a href="/explore" className="nav-link font text-dark"><h5><b>Исследовать</b></h5></a></li>
                        <li className="nav-item"><a href="/rooms" className="nav-link text-dark font"><h5><b>Комнаты</b></h5></a></li>
                        <li className="nav-item"><a href="/about" className="nav-link text-dark font"><h5><b>О нас</b></h5></a></li>
                        <li className="nav-item"><a href="/contactus" className="nav-link text-dark font"><h5><b>Контакты</b></h5></a></li>
                        <li className="nav-item"><a href="/registra" className="nav-link text-dark font"><h5><b>Регистрация/Вход</b></h5></a></li>
                    </ul>
                </nav>
                <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
            </header>
            {/* Header */}
            <header className="bg-dark text-white p-3 shadow d-flex justify-content-between align-items-center">
                <h2 className="m-0">🏨 Список хостелов</h2>
                <div>
                    <Link to="/hostels/manage" className="btn btn-success me-2">
                        ⚙️ Управление хостелами
                    </Link>
                    <button className="btn btn-outline-light" onClick={fetchData}>
                        🔄 Обновить
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="container my-5">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status" />
                        <p className="mt-3">Загрузка данных...</p>
                    </div>
                ) : (
                    <>
                        <div className="card shadow-sm">
                            <div className="card-header bg-light">
                                <h4>Доступные хостелы</h4>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-hover mb-0">
                                    <thead className="table-primary text-center">
                                        <tr>
                                            <th>#</th>
                                            <th>Название</th>
                                            <th>Локация</th>
                                            <th>Цена</th>
                                            <th>Рейтинг</th>
                                            <th>Дата создания</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hostels.map((hostel, index) => (
                                            <tr key={hostel.id} className="text-center align-middle">
                                                <td>{index + 1}</td>
                                                <td><strong>{hostel.nameHotel}</strong></td>
                                                <td>{hostel.locationHotel}</td>
                                                <td>{hostel.priceHotel} сом</td>
                                                <td>{(hostel.raitingHotel / 2e6).toFixed(1)} ⭐</td>
                                                <td>{new Date(hostel.createdAt).toLocaleDateString("ru-RU")}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {hostels.length === 0 && (
                            <div className="alert alert-warning text-center mt-3">
                                Хостелов пока нет. Попробуйте обновить позже.
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Footer */}
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
};

export default HostelViewPage;