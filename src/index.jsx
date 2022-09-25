import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './Components/Registration/registration';

const App = () => {
  return (
    <>
    <Registration/>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
