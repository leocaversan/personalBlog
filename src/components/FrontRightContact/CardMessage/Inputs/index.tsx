import style from './Inputs.module.css'

import { InputsProps } from "../../../../Props/props";


const Inputs = ({name}:InputsProps) => {
    return (
        <div className={style.container}>
            <input
                placeholder={name} 
                type="text" />
        </div>
    );
};
export default Inputs;