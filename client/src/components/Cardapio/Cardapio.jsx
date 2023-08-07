import ItemCard from "./ItemCard";
import styles from "./item.module.css"

export default function Cardapio(){
    return(
        <div className={styles.menus}>
            <div className={styles.text_center && styles.heading && styles.padded} id='cardapioV'>
					<div className={styles.treefour}>
						<h2 className={styles.Cad}>Cardápio</h2>
					</div>
				</div>
            <div className={styles.flexive}>
                    <ItemCard nome="bebidas"/>
                    <ItemCard nome="pizzas"/>
                    <ItemCard nome="saladas"/>
                    <ItemCard nome="pizzas doces"/>
            </div>
        </div>
    )
}