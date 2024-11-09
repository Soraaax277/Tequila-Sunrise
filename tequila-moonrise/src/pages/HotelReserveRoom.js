import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/HotelReserve.css';
import { useNavigate } from 'react-router-dom';
import RoomLayout from '../components/img/RoomLayout.png';
import Room1 from '../components/img/room1.jpg';
import Room2 from '../components/img/room2.jpg';
import Room3 from '../components/img/room3.jpg';
import Room4 from '../components/img/room4.jpg';

// Updated room types
const rooms = [
  { id: 1, name: 'Standard', price: 100, image: Room1, inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning'] },
  { id: 2, name: 'Deluxe', price: 150, image: Room2, inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar'] },
  { id: 3, name: 'Ocean View', price: 200, image: Room3, inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar', 'Ocean view'] },
  { id: 4, name: 'Private Pool', price: 250, image: Room4, inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar', 'Ocean view', 'Private pool'] },
];

const HotelReserveRoom = ({ setRoomData, hotelReserveId }) => {
  const [adults, setAdults] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [breakfast, setBreakfast] = useState(false);
  const [extraBed, setExtraBed] = useState(false);
  const [request, setRequest] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const baseRate = selectedRoom ? selectedRoom.price : 0;
  const breakfastPrice = breakfast ? 20 : 0;
  const extraBedPrice = extraBed ? 30 : 0;
  const totalFee = (baseRate + breakfastPrice + extraBedPrice) * adults;

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setRoomData({ room, adults, breakfast, extraBed, request, totalFee }); // Pass room data to parent
  };

  const handleNext = async () => {
    if (!selectedRoom) {
      alert('Please select a room before proceeding.');
      return;
    }

    const roomData = {
      hotelReserveId, // Use the hotelReserveId passed from parent
      roomType: selectedRoom.name, // Use the room name, e.g., "Standard", "Deluxe", etc.
      numberOfRooms: 1, // Adjust as necessary
      pricePerNight: selectedRoom.price,
      adults: parseInt(adults), // Ensure adults is an integer
      breakfast: breakfast, // Boolean for breakfast
      extraBed: extraBed, // Boolean for extra bed
      request: request, // Special request
      totalFee: totalFee, // Total fee calculated
    };

    try {
      const response = await fetch('http://localhost:5000/api/hotelreserveroom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
      });

      if (response.ok) {
        console.log('Room reservation data saved successfully');
        navigate('/guest-information'); // Navigate to the next step
      } else {
        const error = await response.json();
        alert('Failed to save room reservation data: ' + error.message);
      }
    } catch (error) {
      console.error('Error saving room reservation data:', error);
      alert('Error saving room reservation data: ' + error.message);
    }
};

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: 'transparent', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="steps">
        <div className="step">CHECK-IN & CHECK -OUT DATE</div>
        <div className="step active">SELECT ROOMS & RATES</div>
        <div className="step">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING CONFIRMATION</div>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="adults">Number of Adults</label>
            <input className="form-control" id="adults" type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="room">Room</label>
            <select className="form-control" id="room" onChange={(e) => handleRoomSelection(rooms.find(room => room.id === parseInt(e.target.value)))}>
              <option value="">Select a room</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>{room.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="baseRate">Base Rate ({totalFee > 0 ? `${totalFee} Lunaria` : '0 Lunaria'})</label>
            <input className="form-control" id="baseRate" type="text" value={baseRate} readOnly />
          </div>
          <div className="mb-3">
            <label className="form-label">Room Inclusions:</label>
            <ul>
              {selectedRoom && selectedRoom.inclusions.map((inclusion, index) => (
                <li key={index}>{inclusion}</li>
              ))}
            </ul>
          </div>
          <div className="mb-3 form-check">
            <input className="form-check-input" id="breakfast" type="checkbox" checked={breakfast} onChange={() => setBreakfast(!breakfast)} />
            <label className="form-check-label" htmlFor="breakfast">Breakfast Buffet (20 Lunaria)</label>
          </div>
          <div className="mb-3 form-check">
            <input className="form-check-input" id="extraBed" type="checkbox" checked={extraBed} onChange={() => setExtraBed(!extraBed)} />
            <label className="form-check-label" htmlFor="extraBed">Extra Bed (30 Lunaria)</label>
          </div>
          <div className="mb-3 ">
            <label className="form-label" htmlFor="request">Special Requests (will be added to the bill):</label>
            <textarea className="form-control" id="request" value={request} onChange={(e) => setRequest(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="totalFee">Total Fee ({totalFee > 0 ? `${totalFee} Lunaria` : '0 Lunaria'})</label>
            <input className="form-control" id="totalFee" type="text" value={totalFee} readOnly />
          </div>
        </form>
        <div className="row">
          <div className="col-md-8">
            <img className="room-image" src={RoomLayout} alt="Room layout image" />
          </div>
          <div className="col-md-4">
            {rooms.map(room => (
              <img key={room.id} className="room-image mb-3" src={room.image} alt={`Room ${room.id}`} onClick={() => handleRoomSelection(room)} />
            ))}
          </div>
        </div>
        <div className="text-end mt-3">
          <button className="next-button" onClick={handleNext}>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default HotelReserveRoom;