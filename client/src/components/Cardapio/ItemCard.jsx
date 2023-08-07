import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import styles from './item.module.css'

export default function ItemCard(props){

useEffect(
  ()=>{search()}
);
    const [produtos, setProdutos] = useState([])
    const [nome, setNome] = useState(props.nome)
    const search = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/pesquisaCard/${props.nome}`);
          setProdutos(response.data);
        } catch (error) {
          console.error(error);
        }
    };
  
  function nomes(v){
    const originalString = v;
    const modifi = originalString.replace(' ', '_');
    return modifi;
  }
  
    useEffect(() => {
      if(props.nome==='pizzas doces'){
        const n = nomes(props.nome);
        setNome(n);
      }
    },[props.nome])
    return(
        <div className={styles.tipo}>
            <div>
                <div className={styles.foodMenu}>
                      <div className="titul">
                        <h2 className={styles[nome]}>{nome.toUpperCase()}</h2>
                      </div>
              <div id={nome} className={styles.responsiveItems}>
                {produtos.map((produto) => (
                <ul key={produto.id_pro}>
                  <li className={styles.linha}>
                  <div className={styles.food_desc && styles.linha2} id={produto.id_pro}>
                        <figure>
                          <ImageItem id={produto.id_pro}/>
                        </figure>
                        <div>
                          <h2>{produto.nome}</h2>
                          <p>{produto.descricao}</p>
                        </div>
                    </div>
                    <div className={styles.pricing}>R$ {produto.preco}</div>
                  </li>
                </ul>
              ))}  
              </div>
						</div>
            </div>
        </div>
    )
}


ItemCard.propTypes = {
  nome: PropTypes.string       
}