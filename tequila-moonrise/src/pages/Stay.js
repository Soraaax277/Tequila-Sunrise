import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Stay.css';
import StayImage from '../components/img/StayBedroom.jpg';
import { useBooking } from '../Pages/BookingContext'; // Import the context

export default function Stay({ checkinDate, checkoutDate, guestData, roomData }) {
    const { setBookingStatus } = useBooking(); // Get the setBookingStatus function
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleBookingSubmit = async () => {
        const bookingData = {
            checkinDate,
            checkoutDate,
            ...guestData,
            ...roomData,
        };

        try {
            const response = await fetch('http://localhost:5000/api/stay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Booking successful:', result);
                setBookingStatus('Booking successful!'); // Set booking status
                navigate('/hotelreserve'); // Navigate to HotelReserve component
            } else {
                const error = await response.json();
                alert('Booking failed: ' + error.message);
            }
        } catch (error) {
            console.error('Error booking:', error);
            alert('Error booking: ' + error.message);
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='stay-container'>
                <img className='header-image rounded' src={StayImage} alt="Stay" />
                <div className='text-container'>
                    <p className='text-justify exclusive-text'>
                        Welcome to Tequila Moonrise, the universe's first luxury space hotel! Experience the thrill of zero gravity while enjoying panoramic views of the stars. 
                        <br /><br />
                        Book your stay now and embark on a cosmic adventure like no other. Limited reservations are available, so secure your spot among the stars today!
                    </p>
                    <Link className="btn book-now-button mt-3" onClick={handleBookingSubmit}>Book Now</Link>
                </div>
            </div>
        </div>
    );
}