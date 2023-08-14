import styles from './login.module.css';
import { FaEye } from 'react-icons/fa';
import $ from 'jquery';
import swal from 'sweetalert';
import axios from 'axios';

export default function Cadastro() {
  function Estado(event) {
    var est = event.target.value;
    var esta = est.split('|');
    var estado = esta[0];
    var sigla = esta[1];
    $.ajax({
      url:
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' +
        sigla +
        '/municipios?orderBy=nome',
      method: 'GET',
      success: function (response) {
        // Manipular os dados retornados
        var cidade = response;
        $('#cidade_list').html('');
        var cidadeList = $('#cidade_list');

        cidade.forEach(function (cidade) {
          // Criar um item de lista para cada estado
          var Uf = cidade.microrregiao.mesorregiao.UF.nome;
          if (estado === Uf) {
            var listItem = $('<option>').text(cidade.nome).val(cidade.nome);

            cidadeList.append(listItem);
          }
        });
      },
      error: function (error) {
        console.log('Ocorreu um erro ao acessar a API do IBGE: ' + error);
      },
    });
  } //fim estado change sem o cep

  //busca cep
  function Cep(event) {
    event.preventDefault();
    var cep = $('#cep').val().replace(/\D/g, '');

    if (cep.length !== 8) {
      $('#cep').addClass('is-invalid');
      swal('O CEP deve conter 8 dígitos!', { icon: 'warning' });
      return;
    }

    $('#cep').removeClass('is-invalid');

    $.ajax({
      url: 'https://viacep.com.br/ws/' + cep + '/json/',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        if (!data.erro) {
          //busca estado
          $.ajax({
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
            method: 'GET',
            success: function (response) {
              // usar dados retornados
              var estados = response;
              var estadosList = $('#estados_list');

              estados.forEach(function (estado) {
                // Criar um item de lista para cada estado
                var listItem = $('<option>')
                  .text(estado.nome + '|' + estado.sigla)
                  .val(estado.nome + '|' + estado.sigla);
                estadosList.append(listItem);
                if (estado.sigla === data.uf) {
                  listItem.attr('selected', 'selected');
                }
              });
            },
            error: function (error) {
              console.log('Ocorreu um erro ao acessar a API do IBGE: ' + error);
            },
          }); //fim estado change com o cep

          //procura com data
          $.ajax({
            url:
              'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' +
              data.uf +
              '/municipios?orderBy=nome',
            method: 'GET',
            success: function (response) {
              // Usar dados retornados
              var cidade = response;

              $('#cidade_list').html('');
              var cidadeList = $('#cidade_list');

              cidade.forEach(function (cidade) {
                // Criar um item de lista para cada estado
                var listItem = $('<option>').text(cidade.nome).val(cidade.nome);

                cidadeList.append(listItem);
                if (cidade.nome === data.localidade) {
                  listItem.attr('selected', 'selected');
                }
              });
            },
            error: function (error) {
              console.log('Ocorreu um erro ao acessar a API do IBGE: ' + error);
            },
          }); //fim cidade change com o cep

          //informações finais
          $('#bairro').val(data.bairro);
          $('#rua').val(data.logradouro);
          $('#complemento').val(data.complemento);
        } else {
          swal('Endereço não encontrado!', { icon: 'warning' });
          $('#cep').addClass('is-invalid');
        }
      },
      error: function () {
        alert('Ocorreu um erro ao consultar o endereço!');
      },
    });
  } //fim busca endereço

  function mostrar() {
    let t = $('#password').attr('type');
    if (t === 'password') {
      $('#password').attr('type', 'text');
      $('#password2').attr('type', 'text');
    } else {
      $('#password').attr('type', 'password');
      $('#password2').attr('type', 'password');
    }
  }

  function Cadastro() {
    let nome = $('#nome').val();
    let cpf = $('#cpf').val();
    let fone = $('#fone').val();
    let nasc = $('#nasc').val();
    let email = $('#email').val();
    let senha = $('#password').val();
    let senha2 = $('#password2').val();
    let CEP = $('#cep').val();
    let estado = $('#estados_list').val();
    let cidade = $('#cidade_list').val();
    let bairro = $('#bairro').val();
    let rua = $('#rua').val();
    let numero = $('#numero').val();
    let complemento = $('#complemento').val();

    //verificando se dados não são vazios
    if (
      nome !== '' &&
      cpf !== '' &&
      fone !== '' &&
      nasc !== '' &&
      email !== '' &&
      senha !== '' &&
      senha2 !== '' &&
      CEP !== '' &&
      estado !== '' &&
      cidade !== '' &&
      bairro !== '' &&
      rua !== ''
    ) {
      let vcpf = $('#cpf').attr('class');
      let vcep = $('#cep').attr('class');
      if (
        senha === senha2 &&
        vcpf !== 'login_form_control__714Wt is_invalid' &&
        vcep !== 'login_form_control__714Wt is_invalid'
      ) {
        const response = axios
          .post('http://localhost:3001/cadCli', {
            nome,
            cpf,
            fone,
            nasc,
            email,
            senha,
            CEP,
            estado,
            cidade,
            bairro,
            rua,
            numero,
            complemento,
          })
          .then(swal('Criado com sucesso!', { icon: 'success' }));
      } else if (senha !== senha2) {
        swal('As Senhas Estão Diferentes', { icon: 'warning' });
      } else if (vcpf === 'login_form_control__714Wt is_invalid') {
        swal('CPF Invalido!', { icon: 'error' });
      } else {
        swal('CEP Invalido!', { icon: 'error' });
      }
      //fim if de verificar valores
    } else {
      swal('1 ou mais campos obrigatórios não preenchidos!', {
        icon: 'warning',
      });
    }
  }

  return (
    <>
      <div className={`${styles.d_flex}`}>
        <div className={`${styles.w_100}`}>
          <h2 className={`${styles.mb_4}`}>Cadastrar nova conta</h2>
        </div>
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="name">
          Nome Completo*
        </label>
        <input
          type="text"
          id="nome"
          className={`${styles.form_control}`}
          placeholder="Nome Completo"
          required
        />
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="CPF">
          CPF*
        </label>
        <input
          type="text"
          id="cpf"
          className={`${styles.form_control}`}
          placeholder="CPF"
          required
        />
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="fone">
          Telefone*
        </label>
        <input
          type="text"
          id="fone"
          className={`${styles.form_control}`}
          placeholder="Telefone"
          required
        />
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="nasc">
          Data de Nascimento*
        </label>
        <input
          type="date"
          id="nasc"
          className={`${styles.form_control}`}
          required
        />
      </div>
      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="email">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className={`${styles.form_control}`}
          placeholder="Email"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="password">
          Senha*
        </label>
        <input
          type="password"
          id="password"
          className={`${styles.form_control}`}
          maxLength="50"
          placeholder="Senha"
          required
        />
        <button
          className={`${styles.btn_mostrinfo}`}
          onClick={mostrar}
          id="mostra"
        >
          <FaEye />
        </button>
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="password2">
          Repetir Senha*
        </label>
        <input
          type="password"
          id="password2"
          className={`${styles.form_control}`}
          maxLength="50"
          placeholder="Senha"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="CEP">
          CEP*
        </label>
        <input
          type="text"
          id="cep"
          onBlur={Cep}
          className={`${styles.form_control}`}
          placeholder="cep"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="Estado">
          Estado*
        </label>
        <select
          className={`${styles.form_control}`}
          onChange={Estado}
          id="estados_list"
        ></select>
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="Cidade">
          Cidade*
        </label>
        <select className={`${styles.form_control}`} id="cidade_list"></select>
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="bairro">
          Bairro*
        </label>
        <input
          type="text"
          id="bairro"
          className={`${styles.form_control}`}
          placeholder="bairro"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="Rua">
          Rua*
        </label>
        <input
          type="text"
          id="rua"
          className={`${styles.form_control}`}
          placeholder="Rua"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="Número">
          Número
        </label>
        <input
          type="number"
          id="numero"
          className={`${styles.form_control}`}
          placeholder="Número"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}>
        <label className={styles.label} htmlFor="Complemento">
          Complemento
        </label>
        <input
          type="text"
          id="complemento"
          className={`${styles.form_control}`}
          placeholder="Complemento"
          required
        />
      </div>

      <div className={styles.form_group && styles.mb_3}></div>

      <div className={`${styles.form_group}`}>
        <button
          id="cadastrar"
          className={`${styles.form_control} ${styles.btn} ${styles.btn_info}`}
          onClick={Cadastro}
        >
          Cadastrar-se
        </button>
      </div>
    </>
  );
}
