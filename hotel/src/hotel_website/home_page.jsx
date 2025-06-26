import React, { useState, useMemo } from "react";

export default function HotelCardsWithFilter() {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const clearFilters = () => {
        setPriceRange([0, 1000]);
        setSelectedLocation('');
        setSelectedRating('');
        setSortBy('');
        setSearchQuery('');
    };

    // Move user and bookings state to component level
    const [currentUser] = useState(() => {
        // In a real app, this would come from authentication context
        return { id: 1, name: 'Тестовый пользователь' };
    });

    const [bookings, setBookings] = useState([]);
    

    const hotelsData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
            title: 'Safari Lodge',
            location: 'Tanzania',
            city: 'Serengeti',
            date: '2025-07-30',
            description: 'Luxury tents with wildlife viewing platforms',
            tags: ['Game drives', 'Bush dinners', 'Star beds', 'Swimming pool'],
            price: 410,
            rating: 4.8,
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop',
            title: 'Ocean Breeze Resort',
            location: 'USA',
            city: 'Malibu',
            date: '2025-06-20',
            description: 'Beachfront resort with private beach access',
            tags: ['Sea view', 'Spa', 'Private beach'],
            price: 320,
            rating: 4.7,
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop',
            title: 'Mountain Escape',
            location: 'Switzerland',
            city: 'Zermatt',
            date: '2025-08-15',
            description: 'Alpine resort with stunning mountain views',
            tags: ['Hiking', 'Sauna', 'Cable car'],
            price: 500,
            rating: 4.9,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
            title: 'Zen Garden Inn',
            location: 'Japan',
            city: 'Kyoto',
            date: '2025-09-01',
            description: 'Peaceful retreat with traditional Japanese design',
            tags: ['Onsen', 'Garden view'],
            price: 250,
            rating: 4.6,
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
            title: 'Desert Mirage',
            location: 'UAE',
            city: 'Dubai',
            date: '2025-10-10',
            description: 'Luxury desert experience with modern comforts',
            tags: ['Camel ride', 'Dune tour'],
            price: 600,
            rating: 4.9,
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop',
            title: 'Paradise View',
            location: 'Russia',
            city: 'Нью-Йорк',
            date: '2025-05-15',
            description: 'Отель для каждого момента, наполненного эмоциями',
            tags: ['Бассейн', 'Завтрак', 'Тренажерный зал', 'Wi-Fi'],
            price: 380,
            rating: 5.0,
        },
    ];

    const locations = [...new Set(hotelsData.map(hotel => hotel.location))];

    const filteredHotels = useMemo(() => {
        let filtered = hotelsData.filter(hotel => {
            const priceMatch = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
            const locationMatch = !selectedLocation || hotel.location === selectedLocation;
            const ratingMatch = !selectedRating || hotel.rating >= parseFloat(selectedRating);

            const searchMatch = !searchQuery ||
                hotel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                hotel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                hotel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                hotel.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return priceMatch && locationMatch && ratingMatch && searchMatch;
        });

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        return filtered;
    }, [hotelsData, priceRange, selectedLocation, selectedRating, sortBy, searchQuery]);

    localStorage.setItem('bookings', JSON.stringify([...bookings, newBooking]));
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Поиск:', searchQuery);
    };
    
    // Fixed booking function - no hooks inside
    const handleBooking = (hotel) => {
        const currentUser = { id: 1, name: 'Тестовый пользователь' };

        const newBooking = {
            id: Date.now(),
            userId: currentUser.id,
            hotel,
            bookingDate: new Date().toISOString(),
            checkInDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            checkOutDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
            guests: 2,
            status: 'confirmed'
        };

        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const updated = [...existingBookings, newBooking];
        localStorage.setItem('bookings', JSON.stringify(updated));

        alert(`Отель "${hotel.title}" успешно забронирован!`);
    };



    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <header className="d-flex justify-content-between align-items-center p-3 shadow" style={{ backgroundColor: '#7C6A46' }}>
                <a href="/" className="navbar-brand logo-hover">
                    <img src="/logowhite.png" alt="Logo" height="40" />
                </a>
                <ul className="nav" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li className="nav-item"><a href="/" className="nav-link text-white nav-link nav-hover nav-btn">Главная</a></li>
                    <li className="nav-item"><a href="/bookings" className="nav-link text-white nav-link nav-hover nav-btn">Забронированные</a></li>
                    <li className="nav-item"><a href="/login" className="nav-link text-white nav-link nav-hover nav-btn">Вход</a></li>
                </ul>
            </header>

            <div className="bg-brown text-white text-center py-5" style={{ backgroundColor: '#7C6A46' }}>
                <h2 className="fw-bold">Найдите жилье для новой поездки</h2>
                <p className="mb-4">Ищите спецпредложения на отели, дома и другие варианты</p>
                <div className="d-flex justify-content-center my-4">
                    <div className="search-box d-flex shadow" style={{
                        background: 'white',
                        borderRadius: '50px',
                        overflow: 'hidden',
                        maxWidth: '500px',
                        width: '100%'
                    }}>
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Куда вы хотите поехать?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                            style={{
                                border: 'none',
                                padding: '15px 20px',
                                fontSize: '1rem',
                                outline: 'none',
                                boxShadow: 'none'
                            }}
                        />
                        <button onClick={handleSearchSubmit} className="btn search-btn" style={{
                            background: 'linear-gradient(135deg, #7C6A46, #9B8A6B)',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            fontWeight: '600',
                            borderRadius: '0 50px 50px 0'
                        }}>Поиск</button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                    {/* Filters Sidebar */}
                    <div style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '15px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        height: 'fit-content',
                        position: 'sticky',
                        top: '100px'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ margin: 0, color: '#7C6A46' }}>Фильтры</h3>
                            <button
                                onClick={clearFilters}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#7C6A46',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    textDecoration: 'underline'
                                }}
                            >
                                Очистить
                            </button>
                        </div>

                        {/* Search Query Display */}
                        {searchQuery && (
                            <div style={{ marginBottom: '1.5rem', padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                                <small style={{ color: '#666' }}>Поиск по запросу:</small>
                                <div style={{ fontWeight: 600, color: '#7C6A46', marginTop: '0.25rem' }}>"{searchQuery}"</div>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#999',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        marginTop: '0.5rem'
                                    }}
                                >
                                    Очистить поиск ✕
                                </button>
                            </div>
                        )}

                        {/* Price Range */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                Цена за ночь: ${priceRange[0]} - ${priceRange[1]}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                style={{ width: '100%', marginBottom: '0.5rem' }}
                            />
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px'
                                    }}
                                />
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Location Filter */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                Местоположение
                            </label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Все страны</option>
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>

                        {/* Rating Filter */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                Минимальный рейтинг
                            </label>
                            <select
                                value={selectedRating}
                                onChange={(e) => setSelectedRating(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Любой рейтинг</option>
                                <option value="4.5">4.5+ звезд</option>
                                <option value="4.0">4.0+ звезд</option>
                                <option value="3.5">3.5+ звезд</option>
                            </select>
                        </div>

                        {/* Sort */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                                Сортировка
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">По умолчанию</option>
                                <option value="price-low">Цена: по возрастанию</option>
                                <option value="price-high">Цена: по убыванию</option>
                                <option value="rating">По рейтингу</option>
                            </select>
                        </div>
                    </div>

                    {/* Hotels Grid */}
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <h2 style={{ margin: 0, color: '#333' }}>
                                Найдено отелей: {filteredHotels.length}
                                {searchQuery && <span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}> по запросу "{searchQuery}"</span>}
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {filteredHotels.map((hotel, index) => (
                                <div
                                    key={index}
                                    style={{
                                        background: 'white',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <img
                                            src={hotel.image}
                                            alt={hotel.title}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'rgba(255,255,255,0.9)',
                                            padding: '0.5rem',
                                            borderRadius: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                        }}>
                                            <span style={{ color: '#FFD700' }}>⭐</span>
                                            <span style={{ fontWeight: 600, color: '#333' }}>{hotel.rating}</span>
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <h3 style={{
                                                margin: 0,
                                                fontSize: '1.3rem',
                                                color: '#333',
                                                fontWeight: 600
                                            }}>
                                                {hotel.title}
                                            </h3>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: 'bold',
                                                    color: '#7C6A46'
                                                }}>
                                                    ${hotel.price}
                                                </div>
                                                <div style={{ fontSize: '0.9rem', color: '#666' }}>за ночь</div>
                                            </div>
                                        </div>

                                        <div style={{
                                            color: '#666',
                                            marginBottom: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span>📍</span>
                                            <span>{hotel.city}, {hotel.location}</span>
                                        </div>

                                        <p style={{
                                            color: '#666',
                                            marginBottom: '1rem',
                                            lineHeight: 1.5
                                        }}>
                                            {hotel.description}
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: '1rem'
                                        }}>
                                            {hotel.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    style={{
                                                        background: '#f0f0f0',
                                                        color: '#7C6A46',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '15px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleBooking(hotel)}
                                            style={{
                                                width: '100%',
                                                background: 'linear-gradient(135deg, #7C6A46, #9B8A6B)',
                                                color: 'white',
                                                border: 'none',
                                                padding: '12px',
                                                borderRadius: '8px',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                cursor: 'pointer',
                                                transition: 'transform 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        >
                                            Забронировать
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredHotels.length === 0 && (
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem',
                                background: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}>
                                <h3 style={{ color: '#666', marginBottom: '1rem' }}>
                                    {searchQuery ? `По запросу "${searchQuery}" ничего не найдено` : 'Отели не найдены'}
                                </h3>
                                <p style={{ color: '#999' }}>Попробуйте изменить параметры фильтрации или поискать что-то другое</p>
                                <button
                                    onClick={clearFilters}
                                    style={{
                                        background: 'linear-gradient(135deg, #7C6A46, #9B8A6B)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: '25px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        marginTop: '1rem'
                                    }}
                                >
                                    Очистить все фильтры
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}