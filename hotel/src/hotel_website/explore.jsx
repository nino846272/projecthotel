import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Play, Pause, VolumeUp, VolumeMute } from "react-bootstrap-icons";

export default function Explore() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setMuted(!muted);
        videoRef.current.muted = !muted;
    };

    return (
        <div className="">
            <div className="containe">
                <header className="d-flex justify-content-between align-items-center p-3 shadow mt-5">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                    <nav>
                        <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li className="nav-item"><a href="/" className="nav-link text-dark font"><h5><b>Домашняя страница</b></h5></a></li>
                            <li className="nav-item"><a href="/explore" className="nav-link font text-dark"><h5><b>Исследовать</b></h5></a></li>
                            <li className="nav-item"><a href="/rooms" className="nav-link text-dark font"><h5><b>Комнаты</b></h5></a></li>
                            <li className="nav-item"><a href="/about" className="nav-link text-dark font"><h5><b>О нас</b></h5></a></li>
                            <li className="nav-item"><a href="/contactus" className="nav-link text-dark font"><h5><b>Контакты</b></h5></a></li>
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Book Now</button>
                </header>
                {<div className="d-flex flex-column align-items-center p-3 border rounded shadow-sm" style={{ width: "100%" }}>
                    <video ref={videoRef} src="your-video-file.mp4" controls width="100%" />
                </div>}
                <div className="container my-5">
                    <div className="card border-0 luxury-card position-relative">
                        <img
                            src={`${process.env.PUBLIC_URL}/bodyimage.png`}
                            className="card-img luxury-img"
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center text-white text-center overlay">
                            <h3 className="card-title">Luxurious rooms</h3>
                            <p className="card-text">
                                Элегантная роскошная спальня с галереей демонстрирует индивидуальный дизайн интерьера и
                                захватывающий декор. Расслабьтесь и почувствуйте себя идеально в любом дизайне спальни.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="card border-0 luxury-card position-relative">
                        <img
                            src={`${process.env.PUBLIC_URL}/bodyimage2.png`}
                            className="card-img luxury-img"
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center text-white text-center overlay">
                            <h3 className="card-title">Luxurious rooms</h3>
                            <p className="card-text">
                                Элегантная роскошная спальня с галереей демонстрирует индивидуальный дизайн интерьера и
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="card border-0 luxury-card position-relative">
                        <img
                            src={`${process.env.PUBLIC_URL}/bodyimage3.png`}
                            className="card-img luxury-img"
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center text-white text-center overlay">
                            <h3 className="card-title">Luxurious rooms</h3>
                            <p className="card-text">
                                захватывающий декор. Расслабьтесь и почувствуйте себя идеально в любом дизайне спальни.
                            </p>
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
        </div>

    )
};