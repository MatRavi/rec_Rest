import styles from "./loader.module.css"

export default function Loader(){
    return(<div className={`${styles.d_flex} ${styles.m_4} ${styles.align_items_center}`}>
                <div className={styles.col_4}>
            </div>
                <div className={styles.custom_loader_min}>
            </div>
        </div>)
}