import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Card } from "react-bootstrap";

export default function Home() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const testimonials = [
        {
            date: "2 Mar, 2023",
            name: "Anthony Bruff",
            avatar: `${process.env.PUBLIC_URL}/ava.png`,
            text: "    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
            rating: 5,
        },
        {
            date: "25 Mar, 2023",
            name: "Regina Gallo",
            avatar: `${process.env.PUBLIC_URL}/ava1.png`,
            text: "    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
            rating: 5,
        },
        {
            date: "5 Apr, 2023",
            name: "Jamiya Aliyu",
            avatar: `${process.env.PUBLIC_URL}/ava2.png`,
            text: "    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
            rating: 5,
        },
        {
            date: "10 May, 2023",
            name: "Chris Doe",
            avatar: `${process.env.PUBLIC_URL}/ava1.png`,
            text: "    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
            rating: 5,
        },
        {
            date: "22 Jun, 2023",
            name: "Jane Smith",
            avatar: `${process.env.PUBLIC_URL}/ava.png`,
            text: "    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
            rating: 4,
        }
    ];

    const TestimonialCard = ({ date, name, text, rating, avatar }) => (
        <Card className="shadow-sm p-3 mb-4 bg-white rounded" style={{ minWidth: "300px", textAlign: "left" }}>
            <Card.Body>
                <div className="d-flex align-items-center mb-2">
                    <img src={avatar} alt="avatar" className="rounded-circle me-2" style={{ width: "50px", height: "50px" }} />
                    <div>
                        <Card.Subtitle className="text-muted">{date}</Card.Subtitle>
                        <Card.Footer className="bg-white border-0 text-muted p-0">{name}</Card.Footer>
                    </div>
                </div>
                <div className="mb-2">{"⭐".repeat(rating)}</div>
                <Card.Text style={{ whiteSpace: "normal", wordWrap: "break-word" }}>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
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
                        </ul>
                    </nav>
                    <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
                </header>
                <section className="row align-items-center my-5">
                    <div className="col-md-6 text-start">
                        <h1 className="fw-bold display-3 display-1" style={{ fontFamily: 'Raleway, sans-serif', fontSize: "5rem" }}>
                            Отель для каждого <br /> момента, наполненного <br /> эмоциями
                        </h1>
                        <h5 className="text-muted mt-3 fs-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Каждый момент — как первый раз в Paradise view
                        </h5>
                        <div className="mt-4 gap-5 d-flex align-items-center">
                            <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white', width: '120px', height: '50px' }}>Забронировать</button>
                            <a href="#tour" className="text-decoration-none fs-3 text-dark">Посмотреть тур</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={`${process.env.PUBLIC_URL}/Rectangle 5.png`} alt="Вид на отель" className="img-fluid rounded shadow" />
                    </div>
                </section>

                <div className="container mt-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                {/* Местоположение */}
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img src={`${process.env.PUBLIC_URL}/location-dot-solid.svg`} style={{ width: '20px', height: '20px' }} alt="" className="m-1" />
                                        <div>
                                            <label className="form-label text-muted fs-6"><h5>Местоположение</h5></label>
                                            <select className="form-select border-0 p-0 fs-5" style={{ width: '110px' }}>
                                                <option value="New York">Нью-Йорк</option>
                                                <option value="Los Angeles">Лос-Анджелес</option>
                                                <option value="Chicago">Чикаго</option>
                                                <option value="Houston">Хьюстон</option>
                                                <option value="Miami">Майами</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Тип комнаты */}
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img src={`${process.env.PUBLIC_URL}/hotel-solid.svg`} style={{ width: '20px', height: '20px' }} className="m-1" alt="" />
                                        <div>
                                            <label className="form-label text-muted fs-6">Тип комнаты</label>
                                            <select className="form-select border-0 p-0 fs-5" style={{ width: '110px' }}>
                                                <option value="Single Room">Одноместная</option>
                                                <option value="Double Room">Двухместная</option>
                                                <option value="Suite">Люкс</option>
                                                <option value="Deluxe Room">Делюкс</option>
                                                <option value="Family Room">Семейная</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Количество человек */}
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img src={`${process.env.PUBLIC_URL}/person-solid.svg`} style={{ width: '20px', height: '20px' }} className="m-1" alt="" />
                                        <div>
                                            <label className="form-label text-muted fs-6">Человек</label>
                                            <select className="form-select border-0 p-0 fs-5">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Заезд */}
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img src={`${process.env.PUBLIC_URL}/calendar-regular.svg`} style={{ width: '20px', height: '20px' }} className="m-3" alt="" />
                                        <div>
                                            <label className="form-label text-muted fs-6">Заезд</label>
                                            <DatePicker
                                                selected={checkInDate}
                                                onChange={(date) => setCheckInDate(date)}
                                                className="form-control border-0 p-0 fs-5"
                                                placeholderText="Выберите дату"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Выезд */}
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img src={`${process.env.PUBLIC_URL}/calendar-regular.svg`} style={{ width: '20px', height: '20px' }} className="m-3" alt="" />
                                        <div>
                                            <label className="form-label text-muted fs-6">Выезд</label>
                                            <DatePicker
                                                selected={checkOutDate}
                                                onChange={(date) => setCheckOutDate(date)}
                                                className="form-control border-0 p-0 fs-5"
                                                placeholderText="Выберите дату"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Кнопка забронировать */}
                                <div className="col-auto">
                                    <button className="btn btn-primary fs-5" style={{ backgroundColor: 'rgb(124, 106, 70)', border: 'none' }}>
                                        Забронировать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="facilities-container">
                    <h1 className="facilities-title">Наши Услуги</h1>
                    <p className="facilities-subtitle">Мы предлагаем современные (5-звездочные) удобства для вашего комфорта.</p>
                    <div className="facilities-list">
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/pool.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Бассейн</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/breakfest.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Завтрак</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/gym.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Тренажерный зал</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/game.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Игровой центр</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/light.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Освещение 24/7</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/luandry.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Прачечная</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/parking.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Парковка</h4></span>
                        </div>
                        <div className="facility-item">
                            <img src={`${process.env.PUBLIC_URL}/wifi.svg`} className="facility-icon" />
                            <span className="facility-name" style={{ color: '#7C6A46' }}><h4>Wi-Fi</h4></span>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="card text-center custom-card lr">
                        <div className="lra">
                            <h1>Роскошные номера</h1>
                            <div className="card-body">
                                <p className="card-text">Все номера спроектированы для вашего комфорта</p>
                                <div className="row">
                                    <div className="col bg-light p-3" style={{ borderRadius: '20px' }}>
                                        <img src={`${process.env.PUBLIC_URL}/lx1.png`} alt="" style={{ width: '300px', height: '300px' }} className="m-3" />
                                        <h4 className="m-4 mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>Телевизор, дополнительные простыни и завтрак</h4>
                                    </div>
                                    <div className="col bg-light p-3 mx-2" style={{ borderRadius: '20px' }}>
                                        <img src={`${process.env.PUBLIC_URL}/lx2.png`} alt="" style={{ width: '300px', height: '300px' }} className="m-3" />
                                        <h4 className="m-4 mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>Телевизор, дополнительные простыни и завтрак</h4>
                                    </div>
                                    <div className="col bg-light p-3" style={{ borderRadius: '20px' }}>
                                        <img src={`${process.env.PUBLIC_URL}/lx3.png`} alt="" style={{ width: '300px', height: '300px' }} className="m-3" />
                                        <h4 className="m-4 mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>Телевизор, дополнительные простыни и завтрак</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-start my-5">
                    <h2 className="mb-4">Отзывы</h2>
                    <div
                        className="d-flex gap-4"
                        style={{
                            overflowX: "auto",
                            paddingBottom: "10px",
                            scrollbarWidth: "thin", // Для Firefox
                            scrollbarColor: "#ccc transparent", // Для Firefox
                            width: "100%", // Убедимся, что контейнер занимает всю ширину
                            maxWidth: "100vw", // Ограничиваем максимальную ширину
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
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
