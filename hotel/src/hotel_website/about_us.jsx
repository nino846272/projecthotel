import React from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Aboutus() {
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
                    </ul>
                </nav>
                <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Бронировать</button>
            </header>
            <section className="row align-items-center my-5 body d-flex text-center">
                <div className="col">
                    <h1 style={{ fontSize: "6rem", fontFamily: 'Mulish,sans-serif', }} className="text-light">Номера и люксы</h1>
                    <h4 className="text-light" style={{ fontFamily: 'Mulish,sans-serif' }}>Элегантные роскошные спальни в этой галерее демонстрируют индивидуальный <br /> дизайн интерьера и идеи декорирования. Посмотрите фотографии и найдите свой <br />
                        Идеальный дизайн роскошной спальни.</h4>
                </div>
            </section>
            <div className="container mt-5">
                {/* Верхняя часть: картинка и текст */}
                <div className="row">
                    {/* Колонка с картинкой */}
                    <div className="col-md-6 text-center">
                        <img src={`${process.env.PUBLIC_URL}/photochellika.png`} className="img-fluid" alt="" />
                        <h1 style={{ fontFamily: 'Mulish,sans-serif', marginTop: '50px' }}>Чидинма Джеймс (менеджер)</h1>
                    </div>

                    {/* Колонка с текстом */}
                    <div className="col-md-6">
                        <p style={{ fontFamily: 'Mulish,sans-serif' }}>
                            Организация Объединенных Наций — международная организация, основанная в 1945 году. В настоящее время в состав ООН входят 193 государства-члена, и ее работа руководствуется целями и принципами, содержащимися в ее учредительном Уставе.
                            ООН развивалась на протяжении многих лет, чтобы идти в ногу с быстро меняющимся миром.
                            Но одно осталось неизменным: она остается единственным местом на Земле, где все страны мира могут собираться вместе, обсуждать общие проблемы и находить общие решения, которые приносят пользу всему человечеству. Генеральный секретарь является главным административным должностным лицом ООН, а также символом идеалов Организации и защитником всех народов мира, особенно бедных и уязвимых.

                            Генеральный секретарь назначается Генеральной Ассамблеей по рекомендации Совета Безопасности на 5-летний срок с возможностью продления.
                            Действующим Генеральным секретарем и 9-м лицом, занимающим этот пост, является Антониу Гутерриш из Португалии, вступивший в должность 1 января 2017 года.
                            18 июня 2021 года Гутерриш был переизбран на второй срок, пообещав в качестве своего приоритета продолжать помогать миру намечать курс выхода из пандемии COVID-19.

                            Организация Объединенных Наций — международная организация, основанная в 1945 году. В настоящее время ООН состоит из 193 государств-членов, и ее работа руководствуется целями и принципами, содержащимися в ее учредительном Уставе.
                            С годами ООН развивалась, чтобы идти в ногу с быстро меняющимся миром.
                            Но одно осталось неизменным: она остается единственным местом на Земле, где все страны мира могут собираться вместе, обсуждать общие проблемы и находить общие решения, которые принесут пользу всему человечеству. Генеральный секретарь является главным административным должностным лицом ООН, а также символом идеалов Организации и защитником всех народов мира, особенно бедных и уязвимых.

                            Генеральный секретарь назначается Генеральной Ассамблеей по рекомендации Совета Безопасности на 5-летний срок с возможностью продления.
                            Действующим Генеральным секретарем и 9-м лицом, занимающим этот пост, является Антониу Гутерриш из Португалии, вступивший в должность 1 января 2017 года.
                            18 июня 2021 года Гутерриш был переназначен на второй срок, пообещав в качестве своего приоритета продолжать помогать миру намечать курс выхода из пандемии COVID-19.
                        </p>
                    </div>
                </div>

                {/* Нижняя часть: картинки */}
                <div className="row mt-5 justify-content-center py-4">
                    <div className="col-md-2 d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/nnpc.svg`}// Замените на вашу картинку
                            alt=""
                            className="img-fluid"
                            style={{ width: '152,8px', height: '90px', marginTop: '15px' }}
                        />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/clients2.svg`} // Замените на вашу картинку
                            alt=""
                            className="img-fluid"
                            style={{ width: '128px', height: '128px' }}
                        />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/ckients3.svg`} // Замените на вашу картинку
                            alt=""
                            className="img-fluid"
                            style={{ width: '114px', height: '114px' }}
                        />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/oon.svg`} // Замените на вашу картинку
                            alt=""
                            className="img-fluid"
                            style={{ width: '72px', height: '72px', marginTop: '30px' }}
                        />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/clients5.svg`} // Замените на вашу картинку
                            alt=""
                            className="img-fluid"
                            style={{ width: '162px', height: '162px', marginBottom: '50px' }}
                        />
                    </div>
                </div>
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