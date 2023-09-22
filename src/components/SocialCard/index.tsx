import { SocialCardProps } from '../../Props/props';

import style from './SocialCard.module.css';


const SocialCard = ({img, functionOnClick, backgroundColor} : SocialCardProps) => {
    return (
        <div 
            className={backgroundColor ? style.container1 : style.container2}
            onClick={functionOnClick}>

                <img 
                    src={img} 
                    alt="ImgSocial" />
        </div>
    );
}
export default SocialCard;