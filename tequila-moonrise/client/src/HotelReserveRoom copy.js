import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './HotelReserve.css';
import { Link } from 'react-router-dom';

const rooms = [
  { id: 1, name: 'Room 1', price: 100, image: 'https://placehold.co/200x150?text=Room+1', inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning'] },
  { id: 2, name: 'Room 2', price: 150, image: 'https://placehold.co/200x150?text=Room+2', inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar'] },
  { id: 3, name: 'Room 3', price: 200, image: 'https://placehold.co/200x150?text=Room+3', inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar', 'Ocean view'] },
  { id: 4, name: 'Room 4', price: 250, image: 'https://placehold.co/200x150?text=Room+4', inclusions: ['Free Wi-Fi', 'Breakfast included', 'Air conditioning', 'Mini bar', 'Ocean view', 'Private pool'] },
];

const HotelReserveRoom = () => {
  const [adults, setAdults] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [breakfast, setBreakfast] = useState(false);
  const [extraBed, setExtraBed] = useState(false);
  const [request, setRequest] = useState('');

  const baseRate = selectedRoom ? selectedRoom.price : 0;
  const breakfastPrice = breakfast ? 20 : 0;
  const extraBedPrice = extraBed ? 30 : 0;
  const totalFee = (baseRate + breakfastPrice + extraBedPrice) * adults;

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: 'transparent', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="steps">
        <div className="step">CHECK-IN & CHECK-OUT DATE</div>
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
            <select className="form-control" id="room" onChange={(e) => setSelectedRoom(rooms.find(room => room.id === parseInt(e.target.value)))}>
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
            <img className="room-image" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-UgEkKwPC6taDZRTUgCEuoLzN.png?st=2024-09-21T09%3A44%3A13Z&se=2024-09-21T11%3A44%3A13Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T02%3A53%3A15Z&ske=2024-09-22T02%3A53%3A15Z&sks=b&skv=2024-08-04&sig=6CRLY9C7ufJ3Owitwk0RsKw6N%2BqLJBHxKVqeiJm0/J4%3D" alt="Room layout image" />
          </div>
          <div className="col-md-4">
            {rooms.map(room => (
              <img key={room.id} className="room-image mb-3" src={room.image} alt={`Room ${room.id}`} onClick={() => setSelectedRoom(room)} />
            ))}
          </div>
        </div>
        <div className="text-end mt-3">
          <Link className="next-button" to="/guest-information">NEXT</Link>
        </div>
      </div>
    </div>
  );
};

export default HotelReserveRoom;