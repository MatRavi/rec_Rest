import Cadastro from "./Cadastro"
import Form from "./Form"
import styles from "./login.module.css"
import React,{useState} from "react"
import Loader from "./../loader/Loader"

export default function Login(props) {
  const [valor, setValor] = useState(0)
  const [loader, setLoader] = useState(false);
  
  
  const receber = (valor) => {
    props.enviarParaMenu(valor);
  };

  function cadastroF(){
    setLoader(true);
		window.setTimeout(() =>{
      if(valor>0){
        setValor(0)
      }else{
        setValor(valor+1) 
      }
      setLoader(false);
    },1000)
  }

  
    return(
      <section className={styles.section}>
        <div className={styles.container && styles.h_auto}>
          <div className={styles.row}>
            <div className={styles.md_12 && styles.lg_10}>
              <div className={styles.wrap && styles.md_flex}>
                <div id="contlog" className={`${valor > 0 ? styles.text_wrap2 : styles.text_wrap} ${styles.p_4} ${styles.p_lg_5} ${styles.text_center} ${styles.d_flex} ${styles.align_items} ${styles.order_md_last}`}>
                  <div className={styles.text && styles.w_100}>
                    <h1 className={styles.ti}><b>Bem-Vindo</b></h1>
                    <p id="ntc">{loader ? <Loader /> : valor > 0 ? "Já tem conta?" : "Não tem conta?"}</p>
                    <button id="sing" onClick={cadastroF} className={`${styles.btn} ${styles.btn_white} ${styles.btn_outline_white}`}>{valor > 0 ? "Entrar" : "Cadastrar-se"}</button>
                  </div>
                </div>
            <div id="formul" className={`${styles.login_wrap} ${styles.p_4} ${styles.p_lg_5}`}>
              {valor===0 ? <Form enviarIntermediario={receber}/> : <Cadastro />}
                
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    )
}