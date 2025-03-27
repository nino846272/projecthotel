import React from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Rooms() {
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
        <button className="headerbutton" type="button" style={{ fontFamily: 'Poppins, sans-serif', color: 'white' }}>Book Now</button>
      </header>
      <section className="row align-items-center my-5 body d-flex text-center">
        <div className="col">
          <h1 className="rooms-title text-light">Номера и люксы</h1>
          <h4 className="rooms-text text-light">
            Элегантные роскошные спальни в этой галерее демонстрируют индивидуальный дизайн интерьера и идеи декора.
          </h4>
          <p className="rooms-text text-light">
            Просмотрите фотографии и найдите идеальный вариант для себя.
          </p>
          <button style={{ background: 'transparent', border: '2px solid white', borderRadius: '40px', padding: '20px' }} className="py-5"> <img src={`${process.env.PUBLIC_URL}/buttonvector.svg`} alt="" /></button>
        </div>
      </section>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
            </div>
          </div>
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
            </div>
          </div>
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: '100px' }}>
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100 mt-5" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
            </div>
          </div>
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100 mt-5" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
            </div>
          </div>
          <div className="col-4">
            <img src={`${process.env.PUBLIC_URL}/roomsimage.png`} className="w-100 mt-5" alt="" />
            <div className="row">
              <div className="col-6 p-3">
                <h4 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Королевский номер</h4>
              </div>
              <div className="col-6 p-4">
                <h6 style={{ fontFamily: 'Mulish,sans-serif', color: '#7C6A46' }}>Доступно: Да</h6>
              </div>
            </div>
            <div className="row px-5" style={{ textAlign: 'left', color: '#7C6A46' }}>
              <p>₦190,000</p>
            </div>
            <hr style={{ color: '#7C6A46', border: '2px solid black' }} />
            <div className="row">
              <img src={`${process.env.PUBLIC_URL}/group.svg`} style={{ width: '200px' }} alt="" />
              <button style={{ width: '100px', height: '50px', marginLeft: '70px', border: 'none', backgroundColor: ' #7C6A46' }} className="text-light"> Book Now</button>
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
  )
};