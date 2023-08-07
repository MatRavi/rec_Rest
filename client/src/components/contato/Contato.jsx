import styles from "./contato.module.css"
import { FaFacebook, FaLocationDot as Locate, FaPhone, FaPaperPlane as Email} from "react-icons/fa6"

export default function Contato(){
    return(
        
        <div id="footer">
            <div className={styles.contat}>
                <h4><FaPhone /> Telefone: (99)99999-9999</h4>
                <h4><Email /> Email: MariosPizza@gmail.com</h4>
                <h4><Locate /> Endereço: Estado / Cidade</h4>
                <h4><FaFacebook /> Facebook: MarioPeperoni</h4>
            </div>
        </div>
    )
}