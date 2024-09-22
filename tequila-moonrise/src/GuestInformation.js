import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Stay.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GuestInformation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthdate: '',
    email: '',
    confirmEmail: '',
    nationality: '',
    arrivalTime: '',
    contactNumber: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthdate: date
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Please type in the required field';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: 'transparent', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="steps">
        <div className="step">CHECK-IN & CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step active">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING CONFIRMATION</div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <div className="error">{errors.gender}</div>}
            </div>
            <div className="col-md-6">
              <DatePicker
                selected={formData.birthdate}
                onChange={handleDateChange}
                className="form-control"
                placeholderText="Birthdate"
              />
              {errors.birthdate && <div className="error">{errors.birthdate}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm Email Address"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
              />
              {errors.confirmEmail && <div className="error">{errors.confirmEmail}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              >
                <option>Nationality</option>
                <option>Afghan</option>
                <option>Albanian</option>
                <option>Algerian</option>
                <option>American</option>
                <option>Andorran</option>
                <option>Angolan</option>
                <option>Antiguan</option>
                <option>Argentine</option>
                <option>Armenian</option>
                <option>Australian</option>
                <option>Austrian</option>
                <option>Azerbaijani</option>
                <option>Bahamian</option>
                <option>Bahraini</option>
                <option>Bangladeshi</option>
                <option>Barbadian</option>
                <option>Belarusian</option>
                <option>Belgian</option>
                <option>Belizean</option>
                <option>Beninese</option>
                <option>Bhutanese</option>
                <option>Bolivian</option>
                <option>Bosnian</option>
                <option>Botswanan</option>
                <option>Brazilian</option>
                <option>British</option>
                <option>Bruneian</option>
                <option>Bulgarian</option>
                <option>Burkinabe</option>
                <option>Burmese</option>
                <option>Burundian</option>
                <option>Cambodian</option>
                <option>Cameroonian</option>
                <option>Canadian</option>
                <option>Cape Verdean</option>
                <option>Central African</option>
                <option>Chadian</option>
                <option>Chilean</option>
                <option>Chinese</option>
                <option>Colombian</option>
                <option>Comoran</option>
                <option>Congolese</option>
                <option>Costa Rican</option>
                <option>Croatian</option>
                <option>Cuban</option>
                <option>Cypriot</option>
                <option>Czech</option>
                <option>Danish</option>
                <option>Djiboutian</option>
                <option>Dominican</option>
                <option>Dominican (Republic)</option>
                <option>Dutch</option>
                <option>East Timorese</option>
                <option>Ecuadorean</option>
                <option>Egyptian</option>
                <option>Emirati</option>
                <option>Equatorial Guinean</option>
                <option>Eritrean</option>
                <option>Estonian</option>
                <option>Ethiopian</option>
                <option>Fijian</option>
                <option>Finnish</option>
                <option>French</option>
                <option>Gabonese</option>
                <option>Gambian</option>
                <option>Georgian</option>
                <option>German</option>
                <option>Ghanaian</option>
                <option>Greek</option>
                <option>Grenadian</option>
                <option>Guatemalan</option>
                <option>Guinea-Bissauan</option>
                <option>Guinean</option>
                <option>Guyanese</option>
                <option>Haitian</option>
                <option>Honduran</option>
                <option>Hungarian</option>
                <option>Icelandic</option>
                <option>Indian</option>
                <option>Indonesian</option>
                <option>Iranian</option>
                <option>Iraqi</option>
                <option>Irish</option>
                <option>Israeli</option>
                <option>Italian</option>
                <option>Ivorian</option>
                <option>Jamaican</option>
                <option>Japanese</option>
                <option>Jordanian</option>
                <option>Kazakh</option>
                <option>Kenyan</option>
                <option>Kiribati</option>
                <option>Kuwaiti</option>
                <option>Kyrgyz</option>
                <option>Lao</option>
                <option>Latvian</option>
                <option>Lebanese</option>
                <option>Liberian</option>
                <option>Libyan</option>
                <option>Liechtensteiner</option>
                <option>Lithuanian</option>
                <option>Luxembourger</option>
                <option>Macedonian</option>
                <option>Malagasy</option>
                <option>Malawian</option>
                <option>Malaysian</option>
                <option>Maldivian</option>
                <option>Malian</option>
                <option>Maltese</option>
                <option>Marshallese</option>
                <option>Mauritanian</option>
                <option>Mauritian</option>
                <option>Mexican</option>
                <option>Micronesian</option>
                <option>Moldovan</option>
                <option>Monacan</option>
                <option>Mongolian</option>
                <option>Montenegrin</option>
                <option>Moroccan</option>
                <option>Mozambican</option>
                <option>Namibian</option>
                <option>Nauruan</option>
                <option>Nepalese</option>
                <option>New Zealander</option>
                <option>Nicaraguan</option>
                <option>Nigerian</option>
                <option>Nigerien</option>
                <option>North Korean</option>
                <option>Norwegian</option>
                <option>Omani</option>
                <option>Pakistani</option>
                <option>Palauan</option>
                <option>Palestinian</option>
                <option>Panamanian</option>
                <option>Papua New Guinean</option>
                <option>Paraguayan</option>
                <option>Peruvian</option>
                <option>Philippine</option>
                <option>Polish</option>
                <option>Portuguese</option>
                <option>Qatari</option>
                <option>Romanian</option>
                <option>Russian</option>
                <option>Rwandan</option>
                <option>Saint Lucian</option>
                <option>Salvadoran</option>
                <option>Samoan</option>
                <option>San Marinese</option>
                <option>Sao Tomean</option>
                <option>Saudi</option>
                <option>Senegalese</option>
                <option>Serbian</option>
                <option>Seychellois</option>
                <option>Sierra Leonean</option>
                <option>Singaporean</option>
                <option>Slovak</option>
                <option>Slovenian</option>
                <option>Solomon Islander</option>
                <option>Somali</option>
                <option>South African</option>
                <option>South Korean</option>
                <option>South Sudanese</option>
                <option>Spanish</option>
                <option>Sri Lankan</option>
                <option>Sudanese</option>
                <option>Surinamer</option>
 <option>Swazi</option>
                <option>Swedish</option>
                <option>Swiss</option>
                <option>Syrian</option>
                <option>Taiwanese</option>
                <option>Tajik</option>
                <option>Tanzanian</option>
                <option>Thai</option>
                <option>Togolese</option>
                <option>Tongan</option>
                <option>Trinidadian or Tobagonian</option>
                <option>Tunisian</option>
                <option>Turkish</option>
                <option>Turkmen</option>
                <option>Tuvaluan</option>
                <option>Ugandan</option>
                <option>Ukrainian</option>
                <option>Uruguayan</option>
                <option>Uzbek</option>
                <option>Vanuatuan</option>
                <option>Venezuelan</option>
                <option>Vietnamese</option>
                <option>Yemeni</option>
                <option>Zambian</option>
                <option>Zimbabwean</option>
              </select>
              {errors.nationality && <div className="error">{errors.nationality}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              >
                <option>Estimated Time of Arrival</option>
                <option>00:00</option>
                <option>00:30</option>
                <option>01:00</option>
                <option>01:30</option>
                <option>02:00</option>
                <option>02:30</option>
                <option>03:00</option>
                <option>03:30</option>
                <option>04:00</option>
                <option>04:30</option>
                <option>05:00</option>
                <option>05:30</option>
                <option>06:00</option>
                <option>06:30</option>
                <option>07:00</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
                <option>22:30</option>
                <option>23:00</option>
                <option>23:30</option>
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>
          </div>
          <button type="submit" className="btn btn-next">NEXT</button>
        </form>
      </div>
    </div>
  );
}

export default GuestInformation;