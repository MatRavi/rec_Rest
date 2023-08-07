import MenuCard from '../Menus/MenuCard';
import Cardapio from '../Cardapio/Cardapio';

export default function principal(){
    return(
        <>
        <div className='cardaMenu' data-stellar-background-ratio="0.5">
            <MenuCard/>
        </div>
        <Cardapio />
        </>
        )
}