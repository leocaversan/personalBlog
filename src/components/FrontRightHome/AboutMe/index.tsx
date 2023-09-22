import style from './AboutMe.module.css'
import { AboutMeProps } from '../../../Props/props'
const AboutMe = ({ tittle, description, img }: AboutMeProps) => {
    return (
        <div className={style.container}>
            <div className={style.tittle}>
                <h1>
                    {tittle}
                </h1>
                <img src={img} alt="" />
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    );
}

export default AboutMe;