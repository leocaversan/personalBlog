import style from './ExperienceCards.module.css'

import { ExperienceCardsProps } from '../../../Props/props';

const ExperienceCards = ({ timeBegin, timeFinaly, tittle, description, color }: ExperienceCardsProps) => {
    return (
        <div className={color ? style.container1 : style.container2}>
            <div className={style.containerInfo}>
                <div className={style.time}>
                    {timeBegin} - {timeFinaly}
                </div>
                <div className={style.tittle}>
                    {tittle}
                </div>
                <div className={style.description}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCards;