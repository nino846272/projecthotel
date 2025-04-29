import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "https://67cc190f3395520e6af72555.mockapi.io/hotel";

const HostelManagementPage = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingHostel, setEditingHostel] = useState(null);
  const [formData, setFormData] = useState({
    nameHotel: "",
    locationHotel: "",
    priceHotel: "",
    raitingHotel: ""
  });
  const [isAdding, setIsAdding] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      nameHotel: "",
      locationHotel: "",
      priceHotel: "",
      raitingHotel: "",
    });
    setEditingHostel(null);
    setIsAdding(false);
  };

  const handleEdit = (hostel) => {
    setEditingHostel(hostel.id);
    setFormData({
      nameHotel: hostel.nameHotel,
      locationHotel: hostel.locationHotel,
      priceHotel: hostel.priceHotel,
      raitingHotel: hostel.raitingHotel,
    });
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditingHostel(null);
    resetForm();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот хостел?")) {
      setLoading(true);
      try {
        await axios.delete(`${apiUrl}/${id}`);
        setHostels(hostels.filter(hostel => hostel.id !== id));
        setError(null);
      } catch (error) {
        console.error("Ошибка удаления:", error);
        setError("Не удалось удалить хостел. Пожалуйста, попробуйте снова.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingHostel) {
        // Обновление существующего хостела
        const response = await axios.put(`${apiUrl}/${editingHostel}`, formData);
        setHostels(hostels.map(hostel => 
          hostel.id === editingHostel ? response.data : hostel
        ));
      } else {
        // Добавление нового хостела
        const response = await axios.post(apiUrl, formData);
        setHostels([...hostels, response.data]);
      }
      resetForm();
      setError(null);
    } catch (error) {
      console.error("Ошибка сохранения:", error);
      setError("Не удалось сохранить данные. Пожалуйста, проверьте введенную информацию.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white p-3 shadow d-flex justify-content-between align-items-center">
        <h2 className="m-0">⚙️ Управление хостелами</h2>
        <div>
          <Link to="/hostels" className="btn btn-outline-light me-2">
            🔙 К списку хостелов
          </Link>
          <button className="btn btn-success" onClick={handleAdd}>
            ➕ Добавить хостел
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container my-4">
        {error && (
          <div className="alert alert-danger mb-4" role="alert">
            {error}
          </div>
        )}

        {/* Форма добавления/редактирования */}
        {(isAdding || editingHostel) && (
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="m-0">
                {editingHostel ? "Редактирование хостела" : "Добавление нового хостела"}
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="nameHotel" className="form-label">Название хостела</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameHotel"
                      name="nameHotel"
                      value={formData.nameHotel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="locationHotel" className="form-label">Расположение</label>
                    <input
                      type="text"
                      className="form-control"
                      id="locationHotel"
                      name="locationHotel"
                      value={formData.locationHotel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="priceHotel" className="form-label">Цена (сом)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="priceHotel"
                      name="priceHotel"
                      value={formData.priceHotel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="raitingHotel" className="form-label">Рейтинг (от 1 до 5)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="raitingHotel"
                      name="raitingHotel"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.raitingHotel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-outline-secondary me-2" onClick={handleCancel}>
                    Отмена
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Сохранение...
                      </>
                    ) : (
                      "Сохранить"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Таблица хостелов */}
        <div className="card shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h4 className="m-0">Список хостелов</h4>
            <button className="btn btn-sm btn-outline-secondary" onClick={fetchData}>
              🔄 Обновить
            </button>
          </div>
          <div className="card-body p-0">
            {loading && !isAdding && !editingHostel ? (
              <div className="text-center my-4">
                <div className="spinner-border text-primary" role="status" />
                <p className="mt-3">Загрузка данных...</p>
              </div>
            ) : (
              <table className="table table-hover mb-0">
                <thead className="table-light text-center">
                  <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Локация</th>
                    <th>Цена</th>
                    <th>Рейтинг</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {hostels.map((hostel, index) => (
                    <tr key={hostel.id} className="align-middle">
                      <td className="text-center">{index + 1}</td>
                      <td><strong>{hostel.nameHotel}</strong></td>
                      <td>{hostel.locationHotel}</td>
                      <td className="text-center">{hostel.priceHotel} сом</td>
                      <td className="text-center">{hostel.raitingHotel} ⭐</td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEdit(hostel)}
                        >
                          ✏️ Редактировать
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(hostel.id)}
                        >
                          🗑️ Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        
        {!loading && hostels.length === 0 && (
          <div className="alert alert-warning text-center mt-3">
            Хостелов пока нет. Добавьте новый хостел с помощью кнопки "Добавить хостел".
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 text-center text-muted mt-4 border-top">
        © {new Date().getFullYear()} Paradise View | Все права защищены
      </footer>
    </div>
  );
};

export default HostelManagementPage;