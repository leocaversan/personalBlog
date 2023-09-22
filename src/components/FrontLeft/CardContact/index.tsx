import { CardContactProps } from "../../../Props/props";
import style from './cardContact.module.css';


const CardContact = ({ img, name, description }: CardContactProps) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={img} width={30} height={30} alt="" />
            </div>
            <div className={style.description}>
                <div className={style.nameCardContactText}>
                    {name}
                </div>
                    {description}
            </div>
        </div>
    );
}
export default CardContact;