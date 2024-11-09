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
        <div className='container-fluid px-lg-5'>
            <img className='header-image w-100 mx-auto my-5 d-block rounded' src={StayImage} alt="Stay" />
            <div className='d-flex flex-row my-3'>
                <div className='d-flex flex-column'>
                    <p className='text-justify'>Lorem ipsum dolor sit amet...</p>
                    <Link className="btn btn-dark btn-outline-light text-center my-2 px-5 book-now-button" onClick={handleBookingSubmit}>Book Now</Link>
                </div>
            </div>
        </div>
    );
}