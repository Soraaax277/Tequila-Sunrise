import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Stay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Placeholders
import StayImage from '../components/img/StayBedroom.jpg';
import Image1 from '../components/img/restaurantfood1.png';
import Image2 from '../components/img/restaurantfood2.png';
import Image3 from '../components/img/restaurantfood3.png';
import Image4 from '../components/img/restaurantfood4.png';
import HotelReserve from './HotelReserve';
import GuestInformation from './GuestInformation';
import HotelReserveRoom from './HotelReserveRoom';

export default function Stay() {
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [guestData, setGuestData] = useState({});
    const [roomData, setRoomData] = useState({});

    const handleBookingSubmit = async () => {
        const bookingData = {
            checkinDate,
            checkoutDate,
            ...guestData,
            ...roomData,
        };

        try {
            const response = await fetch('http://localhost:3001/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Booking successful:', result);
                alert('Booking successful!');
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
            <img 
                className='header-image w-100 mx-auto my-5 d-block rounded'
                src={StayImage}
            />

            <div className='d-flex flex-row my-3'>
                <div className='d-flex flex-column'>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link className="btn btn-dark btn-outline-light text-center my-2 px-5 book-now-button" to="/hotel">Book Now</Link>
                </div>
                <div className='d-flex flex-row justify-content-center p-2'>
                    <img 
                        className='d-block w-25 px-3 rounded'
                        src={Image1}
                    />
                    <img 
                        className='d-block w-25 px-3 rounded'
                        src={Image2}
                    />
                    <img 
                        className='d-block w-25 px-3 rounded'
                        src={Image3}
                    />
                </div>
            </div>
            <HotelReserve setCheckinDate={setCheckinDate} setCheckoutDate={setCheckoutDate} />
            <HotelReserveRoom setRoomData={setRoomData} />
            <GuestInformation setGuestData={setGuestData} onSubmit={handleBookingSubmit} />
        </div>
    );
}