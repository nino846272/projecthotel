import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HostelPage = () => {
    return (
        <div>

            {/* Header */}
            <header className="d-flex justify-content-between align-items-center p-3 shadow">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Логотип" height="50" />
                <nav>
                    <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <li className="nav-item"><a href="/" className="nav-link text-dark"><h6><b>Главная</b></h6></a></li>
                        <li className="nav-item"><a href="/explore" className="nav-link text-dark"><h6><b>Исследовать</b></h6></a></li>
                        <li className="nav-item"><a href="/rooms" className="nav-link text-dark"><h6><b>Комнаты</b></h6></a></li>
                        <li className="nav-item"><a href="/about" className="nav-link text-dark"><h6><b>О нас</b></h6></a></li>
                        <li className="nav-item"><a href="/contactus" className="nav-link text-dark"><h6><b>Контакты</b></h6></a></li>
                        <li className="nav-item"><a href="/registra" className="nav-link text-dark"><h6>Регистрация / Вход</h6></a></li>
                    </ul>
                </nav>
                <button className="btn btn-primary" type="button" style={{ fontFamily: 'Poppins, sans-serif' }}>Бронировать</button>
            </header>

            {/* Таблица хостелов */}
            <main className="container my-5">
                <h2 className="mb-4">Доступные хостелы</h2>
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Название</th>
                            <th>Локация</th>
                            <th>Тип комнаты</th> {/* 👈 Новая колонка */}
                            <th>Цена за ночь</th>
                            <th>Рейтинг</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sunrise Hostel</td>
                            <td>Ош</td>
                            <td>Двойная кровать</td>
                            <td>800 сом</td>
                            <td>4.5⭐</td>
                            <td><button className="btn btn-sm btn-success">Забронировать</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>City Comfort</td>
                            <td>Бишкек</td>
                            <td>Раздельные кровати</td>
                            <td>950 сом</td>
                            <td>4.2⭐</td>
                            <td><button className="btn btn-sm btn-success">Забронировать</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Family Stay</td>
                            <td>Ош</td>
                            <td>Семейный номер</td>
                            <td>1200 сом</td>
                            <td>4.8⭐</td>
                            <td><button className="btn btn-sm btn-success">Забронировать</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>

            {/* Footer */}
            <footer className="text-light py-4 w-100" style={{ backgroundColor: '#8b6f48' }}>
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-lg-5 col-md-6 mb-4">
                            <h5 className="fw-bold">Paradise View</h5>
                            <p>
                                Обслуживание в отеле Monteleone было исключительным. Все решается быстро.
                                Персонал всегда на шаг впереди.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4">
                            <div className="row">
                                <div className="col-4">
                                    <h6 className="fw-bold">Навигация</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-light text-decoration-none">Бронирование</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Номера</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Контакты</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Исследовать</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h6 className="fw-bold">Компания</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-light text-decoration-none">Политика</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Возврат</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">О нас</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h6 className="fw-bold">Соцсети</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
                                        <li><a href="#" className="text-light text-decoration-none">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4">
                            <h6 className="fw-bold">Рассылка</h6>
                            <p className="small">Получай лучшие предложения первым.</p>
                            <div className="input-group input-group-sm">
                                <input type="email" className="form-control" placeholder="Email" />
                                <button className="btn btn-light" type="button">OK</button>
                            </div>
                        </div>
                    </div>
                    <hr className="border-light" />
                    <div className="text-center mt-3 small">
                        © Paradise View {new Date().getFullYear()}
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default HostelPage;
