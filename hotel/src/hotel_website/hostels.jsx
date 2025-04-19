import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const apiUrl = "https://67cc190f3395520e6af72555.mockapi.io/users";

const HostelPage = () => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get(apiUrl);
            setHostels(res.data);
        } catch (error) {
            console.error("Ошибка загрузки:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {/* Header */}
            <header className="bg-dark text-white p-3 shadow d-flex justify-content-between align-items-center">
                <h2 className="m-0">🏨 Список хостелов</h2>
                <button className="btn btn-outline-light" onClick={fetchData}>🔄 Обновить</button>
            </header>

            {/* Content */}
            <main className="container my-5">
                {loading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status" />
                        <p className="mt-3">Загрузка данных...</p>
                    </div>
                ) : (
                    <>
                        <table className="table table-hover table-bordered">
                            <thead className="table-primary text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Название</th>
                                    <th>Локация</th>
                                    <th>Цена</th>
                                    <th>Рейтинг</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostels.map((hostel, index) => (
                                    <tr key={hostel.id} className="text-center align-middle">
                                        <td>{index + 1}</td>
                                        <td><strong>{hostel.nameHotel}</strong></td>
                                        <td>{hostel.locationHotel}</td>
                                        <td>{hostel.priceHotel} сом</td>
                                        <td>{hostel.raitingHotel} ⭐</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {hostels.length === 0 && (
                            <div className="alert alert-warning text-center">
                                Хостелов пока нет. Попробуйте обновить позже.
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-light py-4 text-center text-muted">
                © {new Date().getFullYear()} Paradise View | Все права защищены
            </footer>
        </div>
    );
};

export default HostelPage;
