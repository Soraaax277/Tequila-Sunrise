document.querySelector("form").addEventListener("submit", function(e) {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        e.preventDefault();  // Prevent form submission if validation fails
    }
});

document.querySelectorAll('.room-card').forEach(card => {
    card.addEventListener('click', function() {
        const selectedRoom = this.getAttribute('data-room');
        document.querySelector('#room').value = selectedRoom;
        alert(`You selected the ${selectedRoom.replace('-', ' ')}!`);
    });
});
