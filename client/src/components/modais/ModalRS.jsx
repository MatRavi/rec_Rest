import styles from './modal.module.css'; 

export default function ModalRS({ isOpen, onClose }) {
    return (
        <div className={`modal ${isOpen ? 'show' : ''} `} id="ModalFsenha" tabIndex="_1" role="dialog" aria_labelledby="exampleModalLabel" aria_hidden={!isOpen}>
          <div className={styles.modal_dialog} role="document">
            <div className={styles.modal_content}> 
              <div className={styles.modal_header}> 
                <h5 className={styles.modal_title} id="exampleModalLabel">Recuperar senha</h5> 
              </div>
              <div className={styles.modal_body}> 
                <div className={styles.form_group}>
                  <label htmlFor="emailsenha" className={styles.col_form_label}>Email:</label>
                  <input type="email" className={styles.form_control} id="emailsenha" placeholder="Email" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="cpfsenha" className={styles.col_form_label}>CPF:</label>
                  <input type="text" className={styles.form_control} id="cpfsenha" placeholder="CPF" />
                </div>
                <div className={styles.form_group} id="novSenha">
                </div>
              </div>
              <div className={styles.modal_footer}>
                <button type="button" className={styles.btn && styles.btn_secondary} id="fecharModal" onClick={onClose}>Fechar</button>
                <button type="button" className={styles.btn && styles.btn_success} id="redefinir">Continuar</button>
              </div>
            </div>
          </div>
        </div>
      );
}
