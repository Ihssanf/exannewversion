// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import RoomsSection from './components/RoomsSection';
import BookingModal from './components/BookingModal';
import BookingsSection from './components/BookingsSection';
import AuthForm from './components/AuthForm';
import Profil from './components/Profil';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt'));
    const [showRooms, setShowRooms] = useState(false);
    const [showBookings, setShowBookings] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [loadingBookings, setLoadingBookings] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');
    const [showAuthForm, setShowAuthForm] = useState(false)
    const [authFormType, setAuthFormType] = useState(null)

    const API_BASE_URL = "http://localhost:9090";

    useEffect(() => {
        fetchUserBookings();
    }, [isLoggedIn]);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setLoggedInUser(localStorage.getItem('loggedInUser') || '')
    };

    const handleHomeClick = () => {
        setShowRooms(false);
        setShowBookings(false);
    };

    const handleRoomsClick = () => {
        setShowRooms(true);
        setShowBookings(false);
    };

    const handleBookingsClick = () => {
        setShowRooms(false);
        setShowBookings(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('loggedInUser');
        setIsLoggedIn(false);
        setLoggedInUser('')
        setShowRooms(false);
        setShowBookings(false);
        window.location.reload(); // refresh page to be sure to remove token
    };

    const handleBook = (roomId) => {
        setSelectedRoomId(roomId);
        setIsBookingModalOpen(true);
    };

    const handleBookSuccess = () => {
        setIsBookingModalOpen(false);
        fetchUserBookings();
    };

    const handleCloseBookingModal = () => {
        setIsBookingModalOpen(false);
    };

    const fetchUserBookings = async () => {
        if (!isLoggedIn) {
            setBookings([]);
            return;
        }
        setLoadingBookings(true);

        try {
            const response = await fetch(`${API_BASE_URL}/bookings/user/{email}/bookings`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setBookings(data)
            }else {
                setBookings([])
                const errorData = await response.text()
                console.error('Erreur lors de la récupération des réservations:', errorData)
            }
        }catch (error) {
            console.error("Erreur de fetch", error)
            setBookings([])
        }
        finally {
            setLoadingBookings(false)
        }
    }

    const handleOpenModal = (type) => {
        setAuthFormType(type);
        setShowAuthForm(true);
    };

    const handleCloseAuthModal = () => {
        setShowAuthForm(false);
        setAuthFormType(null);
    };

    return (
        <Router>
            <div className="App">
                <Navbar
                    onHomeClick={handleHomeClick}
                    onRoomsClick={handleRoomsClick}
                    onBookingsClick={handleBookingsClick}
                    isLoggedIn={isLoggedIn}
                    logout={handleLogout}
                    loggedInUser={loggedInUser}
                    onOpenModal={handleOpenModal}
                />
                <Routes>
                    <Route path="/" element={
                        <HomeSection isLoggedIn={isLoggedIn}>
                            {showRooms && <RoomsSection onBook={handleBook} />}
                            {showBookings && (
                                <BookingsSection bookings={bookings} loading={loadingBookings} />
                            )}
                            {/* Modal pour l'authentification */}
                            {showAuthForm && (
                                <div style={{
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onClick={(e) => {
                                    if (e.target === e.currentTarget) {
                                        handleCloseAuthModal()
                                    }
                                }}>
                                    <AuthForm type={authFormType} onAuthSuccess={handleLoginSuccess}  onCloseModal={handleCloseAuthModal}/>
                                </div>)}
                        </HomeSection>
                    } />
                </Routes>
                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={handleCloseBookingModal}
                    roomId={selectedRoomId}
                    onBookSuccess={handleBookSuccess}
                />
            </div>
        </Router>
    );
}

export default App;