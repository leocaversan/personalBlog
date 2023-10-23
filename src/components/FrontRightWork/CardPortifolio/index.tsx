import style from './CardPortifolio.module.css'
import { CardPortifolioProps } from '../../../Props/props'
const CardPortifolio = ({ img, tittle, description, link } : CardPortifolioProps) => {
    return (
        <span 
            className={style.container}
            onClick={
                () => window.location.href = link
            }>
            <div>
                <img
                    src={img}
                    alt="" />

            </div>
            <div className={style.type}>
                {tittle}
            </div>
            <div className={style.description}>
                {description}
            </div>
        </span>
    )
}
export default CardPortifolio;