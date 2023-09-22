import style from './CardMessage.module.css'
import { CardMessageProps } from '../../../Props/props'
import Inputs from './Inputs';

const CardMessage = ({ description, input1, input2, input3, buttonName, functionButton }: CardMessageProps) => (
    <div className={style.container}>
        <div className={style.description}>
            {description}
        </div>
        <div className={style.inputs}>
            <Inputs name={input1} />
            <Inputs name={input2} />
            <Inputs name={input3} />
        </div>

        <button 
            className={style.buttonClass}
            onClick={functionButton}
            >
                {buttonName}
        </button>

    </div>
);
export default CardMessage;