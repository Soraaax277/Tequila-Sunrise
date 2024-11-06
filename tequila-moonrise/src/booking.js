async function bookHotel(data) {
    try {
        const response = await fetch('http://localhost:3000/api/book', { // Change port if needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Check if the response is OK
        if (!response.ok) {
            const errorResult = await response.json();
            console.error('Booking failed:', errorResult.message);
            alert('Booking failed: ' + errorResult.message);
            return; // Exit the function if the response is not OK
        }

        const result = await response.json();
        console.log('Booking successful:', result);
        alert('Booking successful!');
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

    // Optional: Validate bookingData before sending
    if (!bookingData.name || !bookingData.email) {
        alert('Please fill in all required fields.');
        return; // Exit if validation fails
    }

    bookHotel(bookingData);
});