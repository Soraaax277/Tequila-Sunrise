document.querySelectorAll('.room').forEach(room => {
    room.addEventListener('click', function() {
        const selectedRoom = this.getAttribute('data-room');
        document.querySelector('#room').value = selectedRoom.toLowerCase().replace(' ', '-');
        alert(`You selected the ${selectedRoom}`);
    });
});
