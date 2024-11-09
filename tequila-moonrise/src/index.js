import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path if necessary
import { BookingProvider } from './Pages/BookingContext'; // Adjust the path as necessary

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);