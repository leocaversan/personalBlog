import style from './CardPortifolio.module.css'
import { AboutMeProps } from '../../../Props/props'
const CardPortifolio = ({ img, tittle, description } : AboutMeProps) => {
    return (
        <span className={style.container}>
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