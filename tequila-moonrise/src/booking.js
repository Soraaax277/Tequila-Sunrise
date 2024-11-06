async function bookHotel(data) {
    try {
        const response = await fetch('http://localhost:3000/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            console.log('Booking successful:', result);
            alert('Booking successful!');
        } else {
            console.error('Booking failed:', result.message);
            alert('Booking failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error booking:', error);
        alert('Error booking: ' + error.message);
    }
}


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        hotelName: document.getElementById('hotelName').value,
        checkInDate: document.getElementById('checkInDate').value,
        checkOutDate: document.getElementById('checkOutDate').value,
        numberOfGuests: document.getElementById('numberOfGuests').value,
        specialRequests: document.getElementById('specialRequests').value
    };

    
    bookHotel(bookingData);
});