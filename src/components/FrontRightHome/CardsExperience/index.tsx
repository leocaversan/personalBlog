import style from './CardsExperience.module.css'
import { CardsExperienceProps } from '../../../Props/props';

const CardsExperience = ({ tittle, img, description, color }: CardsExperienceProps) => {

    return (
        <div className={color ? style.container1 : style.container2}>
            <div className={style.imgTittle}>
                <img
                    src={img}
                    alt="" />
                {tittle}
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}

export default CardsExperience;