import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
    const [bookingStatus, setBookingStatus] = useState(null);

    return (
        <BookingContext.Provider value={{ bookingStatus, setBookingStatus }}>
            {children}
        </BookingContext.Provider>
    );
};