import styles from "./styles.module.css"

function MenuCard(){
    return (
        <>
        <div className={styles.overlay}></div>
            <div id={styles.cont}>
                <div className={styles.row} >
                    <div className={styles.umquarto}>
                        <div className={styles.item}>
                            <h3 className={`${styles.imagensPesq1} ${styles.h3}`}>Bebidas</h3>
                        </div>
                    </div>
                    <div className={styles.umquarto}>
                        <div className={styles.item}>
                            <h3 className={`${styles.imagensPesq2} ${styles.h3}`}>Pizzas</h3>
                        </div>
                    </div>
                    <div className={styles.umquarto}>
                        <div className={styles.item}>
                            <h3 className={`${styles.imagensPesq3} ${styles.h3}`}>Saladas</h3>
                        </div>
                    </div>
                    <div className={styles.umquarto}>
                        <div className={styles.item}>
                            <h3 className={`${styles.imagensPesq4} ${styles.h3}`}>Pizzas Doces</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuCard;