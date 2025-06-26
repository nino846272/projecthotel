import React, { useState, useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            // Если пользователь не авторизован, перенаправляем на страницу входа
            navigate("/login");
            return;
        }
        setUser(storedUser);
    }, [navigate]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // Очищаем ошибки при изменении поля
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!user.name.trim()) newErrors.name = "Имя обязательно";
        if (!user.email.trim()) newErrors.email = "Email обязателен";
        else if (!/\S+@\S+\.\S+/.test(user.email)) newErrors.email = "Неверный формат email";
        if (!user.phone.trim()) newErrors.phone = "Телефон обязателен";
        if (user.password && user.password.length < 6) newErrors.password = "Пароль должен быть не менее 6 символов";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = async () => {
        if (!validate()) return;
        
        setLoading(true);
        try {
            // Если у пользователя есть ID, обновляем данные через API
            if (user.id) {
                const response = await fetch(`https://67cc190f3395520e6af72555.mockapi.io/users/${user.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    const updatedUser = await response.json();
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                    setUser(updatedUser);
                    alert("Данные успешно обновлены!");
                } else {
                    alert("Ошибка при обновлении данных");
                }
            } else {
                // Если нет ID, просто сохраняем в localStorage
                localStorage.setItem("user", JSON.stringify(user));
                alert("Данные сохранены!");
            }
            setIsEditing(false);
        } catch (error) {
            console.error("Ошибка при сохранении:", error);
            alert("Ошибка при сохранении данных");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setErrors({});
    };

    const handleCancel = () => {
        // Восстанавливаем данные из localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
        setIsEditing(false);
        setErrors({});
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
            <header className="d-flex justify-content-between align-items-center p-3 shadow" style={{ backgroundColor: '#7C6A46' }}>
                <a href="/" className="navbar-brand logo-hover">
                    <img src="/logowhite.png" alt="Logo" height="40" />
                </a>
                <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li className="nav-item"><a href="/" className="nav-link text-white nav-link nav-hover nav-btn">Главная</a></li>
                    <li className="nav-item"><a href="/bookings" className="nav-link text-white nav-link nav-hover nav-btn">Забронированные</a></li>
                    <li className="nav-item"><a href="/profile" className="nav-link text-white nav-link nav-hover nav-btn">Профиль</a></li>
                </ul>
            </header>
            
            <div className="container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
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
                                    {user.avatar && (
                                        <div className="text-center mb-4">
                                            <img 
                                                src={user.avatar} 
                                                alt="Аватар" 
                                                className="rounded-circle"
                                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}
                                    
                                    <div className="mb-3">
                                        <label className="form-label">Имя</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label className="form-label">Телефон</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            name="phone"
                                            value={user.phone || ''}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    
                                    {/* Показываем поле пароля только если пользователь не авторизован через Google */}
                                    {!user.uid && (
                                        <div className="mb-3">
                                            <label className="form-label">Пароль</label>
                                            <div className="input-group">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                    name="password"
                                                    value={user.password || ''}
                                                    onChange={handleChange}
                                                    disabled={!isEditing}
                                                    placeholder={isEditing ? "Введите новый пароль или оставьте пустым" : ""}
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
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>
                                    )}

                                    {/* Кнопки управления */}
                                    <div className="d-flex gap-2 mt-4">
                                        {!isEditing ? (
                                            <button
                                                className="btn btn-primary"
                                                onClick={handleEdit}
                                            >
                                                Редактировать
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={handleSave}
                                                    disabled={loading}
                                                >
                                                    {loading ? "Сохранение..." : "Сохранить"}
                                                </button>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={handleCancel}
                                                    disabled={loading}
                                                >
                                                    Отмена
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}