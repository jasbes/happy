import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade paar o mundo</h1>

          <p>Visite um orfanato e mude a vida de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Bruxélas</strong>
          <span>Bélgica</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
