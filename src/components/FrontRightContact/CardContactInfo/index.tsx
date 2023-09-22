import style from './CardContactInfo.module.css';

import { CardContactinfoProps } from '../../../Props/props';

const CardContactInfo = ({ color, img, tittle, arrayDescription }: CardContactinfoProps) => {
    return (
        <div className={color ? style.container1 : style.container2}>
            <div className={style.header}>
                <div>
                    <img 
                        src={img} 
                        alt="" />
                </div>
                <div className={style.tittle}>
                    {tittle}
                </div>
            </div>
            <div className={style.description}>
                {arrayDescription.map((description, index) => (
                    <ul key={index}>
                        {description}
                    </ul>
                ))}
            </div>
        </div>
    )
}
export default CardContactInfo;