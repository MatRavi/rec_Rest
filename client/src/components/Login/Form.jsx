import styles from './login.module.css';
import { FaEye } from 'react-icons/fa';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';

export default function Form(props) {
  const [emailCli, setEmailCli] = useState();
  const [senhaCli, setSenhaCli] = useState();

  const mudou = (event) => {
    if (event.target.id === 'email') {
      setEmailCli(event.target.value);
    } else {
      setSenhaCli(event.target.value);
    }
  };

  function mostrar() {
    let t = $('#password').attr('type');
    if (t === 'password') {
      $('#password').attr('type', 'text');
    } else {
      $('#password').attr('type', 'password');
    }
  }
  function ESPrompt() {
    const email = prompt('Qual seu email?', 'email@gmail.com');
    const cpf = prompt('Qual seu cpf?', '000.000.000-00');
    if (email && cpf) {
      axios
        .get('http://localhost:3001/pesquisaRS', {
          params: {
            cpf: cpf,
            email: email,
          },
        })
        .then((response) => {
          if (response.data.length !== 0) {
            const senha = prompt('Digite nova senha: ');
            if (senha) {
              try {
                axios.put(`http://localhost:3001/alteraRS/${senha}`, {
                  cpf: cpf,
                  email: email,
                  senha: senha,
                });
                swal('Senha Alterada!', { icon: 'success' });
              } catch (error) {
                console.error(error);
              }
            } else {
              swal('Senha não foi alterada!', { icon: 'error' });
            }
          } else {
            swal('Você não forneceu dados válidos.', { icon: 'warning' });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      swal('Você não forneceu dados válidos.', { icon: 'warning' });
    }
  }
  const LoginCli = () => {
    axios
      .get('http://localhost:3001/loginCli', {
        params: {
          emailCli,
          senhaCli,
        },
      })
      .then((response) => {
        const datacli = response.data[0].codcli;
        if (datacli === undefined) {
          alert('Usuário ou senha incorretos');
        } else {
          handleSection(datacli);
        }
      });
  };

  const handleSection = (data) => {
    props.enviarIntermediario(data);
  };

  return (
    <>
      <div className={styles.d_flex}>
        <div className={styles.w_100}>
          <h2 className={styles.mb_4}>Entrar na conta</h2>
        </div>
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          onChange={mudou}
          className={`${styles.form_control}`}
          placeholder="Email"
          required
        />
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="password">
          SENHA
        </label>
        <input
          type="password"
          id="password"
          onChange={mudou}
          className={styles.form_control}
          maxLength="50"
          placeholder="Senha"
          required
        />
        <button className={styles.btn_mostr} id="mostra" onClick={mostrar}>
          <FaEye />
        </button>
      </div>
      <div className={styles.form_group}>
        <button
          id="entrar"
          className={`${styles.form_control} ${styles.btn} ${styles.btn_primary}`}
          onClick={LoginCli}
        >
          Entrar
        </button>
      </div>
      <div className={styles.form_group}>
        <button
          id="fsenha"
          className={`${styles.form_control} ${styles.btn} ${styles.btn_secondary}`}
          onClick={ESPrompt}
        >
          Esqueceu senha?
        </button>
      </div>
    </>
  );
}
