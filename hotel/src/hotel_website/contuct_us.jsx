import React from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";


export default function Contactus() {
    const RoomsAndSuites = () => {
        const scrollToSection = () => {
            const section = document.getElementById('target-section');
            section.scrollIntoView({ behavior: 'smooth' });
        };
    }

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center p-3 shadow mt-5">
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
                <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Book Now</button>
            </header>
            <section className="row align-items-center my-5 body d-flex text-center">
                <div className="col">
                    <h1 style={{ fontSize: "6rem", fontFamily: 'Mulish,sans-serif', }} className="text-light">Номера и люксы</h1>
                    <h4 className="text-light" style={{ fontFamily: 'Mulish,sans-serif' }}>Элегантные роскошные спальни в этой галерее демонстрируют индивидуальный <br /> дизайн интерьера и идеи декорирования. Посмотрите фотографии и найдите свой <br />
                        Идеальный дизайн роскошной спальни.</h4>
                </div>
            </section>
            <div className="container mt-4 border p-4 rounded">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Полное Имя</label>
                        <input type="text" className="form-control" style={{ border: '2px solid gray' }} placeholder="e.g John Becker" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Почта</label>
                        <input type="email" className="form-control" style={{ border: '2px solid gray' }} placeholder="johnbecker@gmail.com" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <label className="form-label">Сообшение</label>
                        <textarea className="form-control no-resize" style={{ border: '2px solid gray' }} rows="5" placeholder="message"></textarea>
                    </div>
                </div>
            </div>
            <div className="map-container" style={{ width: "100%", height: "400px" }}>
                <iframe
                    title="Google Maps"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9984.476549240813!2d30.215838278150706!3d51.27212604731503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a8f1a09243629%3A0x8f7b9f5dcd455757!2sThird%20Angel%20Statue!5e0!3m2!1sru!2skg!4v1741185432327!5m2!1sru!2skg"
                ></iframe>
            </div>
            <footer className="text-light py-4 w-100" style={{ backgroundColor: "#8b6f48" }}>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="fw-bold">Paradise view</h5>
                            <p>
                                Обслуживание в отеле Monteleone было исключительным. Не было
                                абсолютно ни одной проблемы, которая не была бы решена своевременно и с
                                удовлетворительными результатами. Команда особенно впечатлена тем, как
                                персонал отеля предвосхитил наши потребности.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-bold">Быстрые ссылки</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Забронировать комнату</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Комнаты</a></li>
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
                            <h6 className="fw-bold">Новостная рассылка</h6>
                            <p>Подпишитесь на нашу рассылку, чтобы получать свежие предложения.</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Введите ваш email" />
                                <button className="btn btn-light" type="button">Подписаться</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">Paradise view 2023</div>
                </div>
            </footer>
        </div>
    )
}