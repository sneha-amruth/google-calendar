import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WeekProvider } from "./context/week-context";
import { EventProvider } from "./context/event-context";

ReactDOM.render(
  <React.StrictMode>
    <EventProvider>
    <WeekProvider>
    <App />
    </WeekProvider>
    </EventProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
