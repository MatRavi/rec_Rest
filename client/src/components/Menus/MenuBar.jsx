import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './styles.module.css';
import Login from './../Login/Login';
import Principal from './../principal/Principal';
import Contato from './../contato/Contato';
import Perfil from './../contato/Perfil';
import React, { useState } from 'react';

function MenuBar() {
  const [codCli, setCodCli] = useState(null);

  const handleCodCli = (codCli) => {
    setCodCli(codCli);
  };

  return (
    <Router className={styles.m_b}>
      <div className={styles.row && styles.textAli && styles.menu}>
        <div className={styles.lin}>
          {codCli !== null ? (
            <Link to="/perfil" className={styles.link}>
              Perfil
            </Link>
          ) : (
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          )}

          <Link to="/" className={styles.link} id={styles.titulo}>
            Mario's
          </Link>
          <Link to="/conta" className={styles.link}>
            Contato
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/login"
          element={<Login enviarParaMenu={handleCodCli} />}
        />
        <Route path="/conta" element={<Contato />} />
        <Route path="/perfil" element={<Perfil cod={codCli} />} />
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}
export default MenuBar;
