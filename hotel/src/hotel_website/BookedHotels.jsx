import React, { useState, useEffect } from "react";

export default function BookedHotels() {
    const [bookedHotels, setBookedHotels] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Demo data for example
    const demoBookings = [
        {
            id: 1,
            userId: 1,
            hotel: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
                title: 'Safari Lodge',
                location: 'Tanzania',
                city: 'Serengeti',
                description: 'Luxury tents with wildlife viewing platforms',
                tags: ['Game drives', 'Bush dinners', 'Star beds', 'Swimming pool'],
                price: 410,
                rating: 4.8,
            },
            bookingDate: new Date().toISOString(),
            checkInDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            checkOutDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
            guests: 2,
            status: 'confirmed'
        },
        {
            id: 2,
            userId: 1,
            hotel: {
                id: 2,
                image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop',
                title: 'Ocean Breeze Resort',
                location: 'USA',
                city: 'Malibu',
                description: 'Beachfront resort with private beach access',
                tags: ['Sea view', 'Spa', 'Private beach'],
                price: 320,
                rating: 4.7,
            },
            bookingDate: new Date(Date.now() - 86400000).toISOString(),
            checkInDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            checkOutDate: new Date(Date.now() + 17 * 24 * 60 * 60 * 1000).toISOString(),
            guests: 4,
            status: 'confirmed'
        },
        {
            id: 3,
            userId: 1,
            hotel: {
                id: 3,
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
                title: 'Mountain Retreat',
                location: 'Switzerland',
                city: 'Zermatt',
                description: 'Alpine lodge with Matterhorn views',
                tags: ['Mountain view', 'Skiing', 'Fireplace', 'Hot tub'],
                price: 450,
                rating: 4.9,
            },
            bookingDate: new Date(Date.now() - 172800000).toISOString(),
            checkInDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            checkOutDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
            guests: 2,
            status: 'pending'
        }
    ];

    useEffect(() => {
        // Симулируем логин
        const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
        setUser(userData);

        // Загружаем брони из localStorage
        const stored = localStorage.getItem('bookings');
        if (stored) {
            const parsed = JSON.parse(stored);
            const userBookings = parsed.filter(b => b.userId === userData.id);
            setBookedHotels(userBookings);
        } else {
            setBookedHotels([]);
        }

        setLoading(false);
    }, []);

    const handleCancelBooking = (bookingId) => {
        if (window.confirm('Are you sure you want to cancel this booking?')) {
            setBookedHotels(prevBookings =>
                prevBookings.filter(booking => booking.id !== bookingId)
            );
            alert('Booking cancelled successfully');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'text-green-600 bg-green-100';
            case 'pending': return 'text-yellow-600 bg-yellow-100';
            case 'cancelled': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading your bookings...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your bookings</h2>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </div>
            </div>
        );
    }
    const newBooking = {
        id: Date.now(),
        userId: currentUser.id,
        hotel: hotel,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">BookingApp</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Hotels</a>
                            <a href="#" className="text-blue-600 font-medium">My Bookings</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Profile</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Bookings</h1>
                    <p className="text-gray-600">Manage and view all your hotel reservations</p>
                </div>

                {bookedHotels.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No bookings yet</h3>
                        <p className="text-gray-600 mb-6">Start planning your next trip by browsing our hotels</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Browse Hotels
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {bookedHotels.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        {/* Hotel Image */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={booking.hotel.image}
                                                alt={booking.hotel.title}
                                                className="w-full lg:w-48 h-32 object-cover rounded-lg"
                                            />
                                        </div>

                                        {/* Hotel Details */}
                                        <div className="flex-grow">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                        {booking.hotel.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-2">
                                                        {booking.hotel.city}, {booking.hotel.location}
                                                    </p>
                                                    <p className="text-gray-700 mb-3">
                                                        {booking.hotel.description}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {booking.hotel.tags.slice(0, 3).map((tag, index) => (
                                                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {booking.hotel.tags.length > 3 && (
                                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                                                +{booking.hotel.tags.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Booking Details */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                                                        <div>
                                                            <span className="text-gray-500">Check-in:</span>
                                                            <p className="font-medium">{formatDate(booking.checkInDate)}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Check-out:</span>
                                                            <p className="font-medium">{formatDate(booking.checkOutDate)}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-500">Guests:</span>
                                                            <p className="font-medium">{booking.guests} guest{booking.guests > 1 ? 's' : ''}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Price and Actions */}
                                                <div className="flex-shrink-0 text-right">
                                                    <div className="mb-4">
                                                        <div className="text-2xl font-bold text-gray-900">
                                                            ${booking.hotel.price}
                                                        </div>
                                                        <div className="text-sm text-gray-500">per night</div>
                                                        <div className="flex items-center justify-end mt-1">
                                                            <span className="text-yellow-400 mr-1">★</span>
                                                            <span className="text-sm font-medium">{booking.hotel.rating}</span>
                                                        </div>
                                                    </div>

                                                    {/* Status */}
                                                    <div className="mb-4">
                                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                                                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                        </span>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="space-y-2">
                                                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                                            View Details
                                                        </button>
                                                        {booking.status === 'confirmed' && (
                                                            <button
                                                                onClick={() => handleCancelBooking(booking.id)}
                                                                className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                                                            >
                                                                Cancel Booking
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Booking Date */}
                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <span className="text-sm text-gray-500">
                                                    Booked on {formatDate(booking.bookingDate)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}