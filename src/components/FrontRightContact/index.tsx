import AboutMe from "../FrontRightHome/AboutMe";
import CardContactInfo from "./CardContactInfo";

import imgLine from "../../Assets/imgs/imgLine.svg";
import imgTel from '../../Assets/imgs/Contact/imgTel.svg';
import imgMail from '../../Assets/imgs/Contact/imgMail.svg';

import style from './FrontRightContact.module.css'
import CardMessage from "./CardMessage";
import { useState } from "react";

const FrontRightContact = () => {
    
    const [name, setName] = useState('');    
    const [mail, setMail] = useState('');    
    const [message, setMessage] = useState('');    
    
    return (
        <div className={style.conatiner}>
            <div className={style.AboutMe}>
                <AboutMe
                    tittle={"Contact"}
                    description={""}
                    img={imgLine}
                />
            </div>
            <div className={style.cardContatInfos}>
                <CardContactInfo
                    tittle={"Phone:"}
                    img={imgTel}
                    color={false}
                    arrayDescription={
                        ["(19)9834-88358"]}
                />
                <CardContactInfo
                    tittle={"Mail:"}
                    img={imgMail}
                    color={false}
                    arrayDescription={["leo_caversan@live.com"]}
                />
            </div>
            <div>
                <CardMessage
                    description={"Please leave your contact details so I can call you."}
                    input1={"Name:"}
                    input2={"Email:"}
                    input3={"Message:"}
                    buttonName={"Submit"}
                    functionButton={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
        </div>
    );
};
export default FrontRightContact;