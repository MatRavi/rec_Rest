import {
  FaLocationDot as Locate,
  FaPhone,
  FaPaperPlane as Email,
} from 'react-icons/fa6';
import { useState } from 'react';
import axios from 'axios';
import styles from './contato.module.css';

export default function Perfil(props) {
  const [cliente, setCliente] = useState([]);

  const search = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pesquisaCli/${props.cod}`
      );
      setCliente(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  search();
  return (
    <div id="footer">
      <h1>Ok</h1>
      {cliente.map((perfil) => (
        <div className={styles.contat}>
          <h4>
            <Email /> Email: MariosPizza@gmail.com
          </h4>
          <h4>
            <FaPhone /> Telefone: {perfil.fone}
          </h4>
          <h4>
            <Locate /> Endereço: estado / Cidade
          </h4>
        </div>
      ))}
    </div>
  );
}
