import styles from "./item.module.css"
import nome from "./../../images/0401-vegan.png"
/*pizzas */
import nome1 from "./../../images/1.jpg"
import nome2 from "./../../images/2.jpg"
import nome4 from "./../../images/4.jpg"
import nome5 from "./../../images/5.jpg"
import nome6 from "./../../images/6.jpg"
import nome7 from "./../../images/7.jpg"
import nome11 from "./../../images/11.jpg"
import nome13 from "./../../images/13.jpg"
import nome14 from "./../../images/14.jpg"
import nome15 from "./../../images/15.jpg"
/*bebidas */
import nome37 from "./../../images/37.jpg"
import nome38 from "./../../images/38.jpg"
import nome39 from "./../../images/39.jpg"
import nome40 from "./../../images/40.jpg"
import nome41 from "./../../images/41.jpg"
import nome42 from "./../../images/42.jpg"
import nome43 from "./../../images/43.jpg"
import nome44 from "./../../images/44.jpg"
import nome45 from "./../../images/45.jpg"
import nome46 from "./../../images/46.jpg"
/*saladas */
import nome47 from "./../../images/47.jpg"
import nome48 from "./../../images/48.jpg"
import nome49 from "./../../images/49.jpg"
import nome50 from "./../../images/50.jpg"
import nome51 from "./../../images/51.jpg"
import nome52 from "./../../images/52.jpg"
import nome53 from "./../../images/53.jpg"
import nome54 from "./../../images/54.jpg"
import nome55 from "./../../images/55.jpg"
import nome56 from "./../../images/56.jpg"
/*pizzas doces */
import nome9 from "./../../images/9.jpg"
import nome18 from "./../../images/18.jpg"
import nome19 from "./../../images/19.jpg"
import nome27 from "./../../images/27.jpg"
import nome31 from "./../../images/31.jpg"
import nome32 from "./../../images/32.jpg"
import nome33 from "./../../images/33.jpg"
import nome34 from "./../../images/34.jpg"
import nome35 from "./../../images/35.jpg"
import nome36 from "./../../images/36.jpg"

export default function ImageItem(props){
        
    switch (props.id) {
        case 1:
            return (<img src={nome1} alt="Marios" className={styles.imag}/>);
        case 2:
            return (<img src={nome2} alt="Marios" className={styles.imag}/>);
        case 4:
            return (<img src={nome4} alt="Marios" className={styles.imag}/>);
        case 5:
            return (<img src={nome5} alt="Marios" className={styles.imag}/>);
        case 6:
            return (<img src={nome6} alt="Marios" className={styles.imag}/>);
        case 7:
            return (<img src={nome7} alt="Marios" className={styles.imag}/>);
        case 9:
            return (<img src={nome9} alt="Marios" className={styles.imag}/>);
        case 11:
            return (<img src={nome11} alt="Marios" className={styles.imag}/>);
        case 13:
            return (<img src={nome13} alt="Marios" className={styles.imag}/>);
        case 14:
            return (<img src={nome14} alt="Marios" className={styles.imag}/>);
        case 15:
            return (<img src={nome15} alt="Marios" className={styles.imag}/>);
        case 18:
            return (<img src={nome18} alt="Marios" className={styles.imag}/>);
        case 19:
            return (<img src={nome19} alt="Marios" className={styles.imag}/>);
        case 27:
            return (<img src={nome27} alt="Marios" className={styles.imag}/>);
        case 31:
            return (<img src={nome31} alt="Marios" className={styles.imag}/>);
        case 32:
            return (<img src={nome32} alt="Marios" className={styles.imag}/>);
        case 33:
            return (<img src={nome33} alt="Marios" className={styles.imag}/>);
        case 34:
            return (<img src={nome34} alt="Marios" className={styles.imag}/>);
        case 35:
            return (<img src={nome35} alt="Marios" className={styles.imag}/>);
        case 36:
            return (<img src={nome36} alt="Marios" className={styles.imag}/>);
        case 37:
            return (<img src={nome37} alt="Marios" className={styles.imag}/>);
        case 38:
            return (<img src={nome38} alt="Marios" className={styles.imag}/>);
        case 39:
            return (<img src={nome39} alt="Marios" className={styles.imag}/>);
        case 40:
            return (<img src={nome40} alt="Marios" className={styles.imag}/>);
        case 41:
            return (<img src={nome41} alt="Marios" className={styles.imag}/>);
        case 42:
            return (<img src={nome42} alt="Marios" className={styles.imag}/>);
        case 43:
            return (<img src={nome43} alt="Marios" className={styles.imag}/>);
        case 44:
            return (<img src={nome44} alt="Marios" className={styles.imag}/>);
        case 45:
            return (<img src={nome45} alt="Marios" className={styles.imag}/>);
        case 46:
            return (<img src={nome46} alt="Marios" className={styles.imag}/>);
        case 47:
            return (<img src={nome47} alt="Marios" className={styles.imag}/>);
        case 48:
            return (<img src={nome48} alt="Marios" className={styles.imag}/>);
        case 49:
            return (<img src={nome49} alt="Marios" className={styles.imag}/>);
        case 50:
            return (<img src={nome50} alt="Marios" className={styles.imag}/>);
        case 51:
            return (<img src={nome51} alt="Marios" className={styles.imag}/>);
        case 52:
            return (<img src={nome52} alt="Marios" className={styles.imag}/>);
        case 53:
            return (<img src={nome53} alt="Marios" className={styles.imag}/>);
        case 54:
            return (<img src={nome54} alt="Marios" className={styles.imag}/>);
        case 55:
            return (<img src={nome55} alt="Marios" className={styles.imag}/>);
        case 56:
            return (<img src={nome56} alt="Marios" className={styles.imag}/>);
        default:
            return (<img src={nome} alt="Marios" className={styles.imag}/>);
      }
    
}