import AboutMe from "../FrontRightHome/AboutMe";
import CardContactInfo from "./CardContactInfo";

import imgLine from "../../Assets/imgs/imgLine.svg";
import imgTel from '../../Assets/imgs/Contact/imgTel.svg';
import imgMail from '../../Assets/imgs/Contact/imgMail.svg';

import style from './FrontRightContact.module.css'
import CardMessage from "./CardMessage";
const FrontRightContact = () => {
    return (
        <div className={style.conatiner}>
            <div className={style.AboutMe}>
                <AboutMe
                    tittle={"Contact"}
                    description={""}
                    img={imgLine} />
            </div>
            <div className={style.cardContatInfos}>
                <CardContactInfo
                    tittle={"Phone:"}
                    img={imgTel}
                    color={false}
                    arrayDescription={["19983488358", "19983488358", "19983488358"]} />
                <CardContactInfo
                    tittle={"Phone:"}
                    img={imgMail}
                    color={false}
                    arrayDescription={["19983488358", "19983488358", "19983488358"]} />
            </div>
            <div>
            <CardMessage 
                description={"I am always open to discurssing new projects p[[prtunities in tech world partnerships and more so mentorship."} 
                input1={"Name:"} 
                input2={"Email:"} 
                input3={"Message:"} 
                buttonName={"Submit"} 
                functionButton={function (): void {
                    throw new Error("Function not implemented.");
                } }/>
            </div>
        </div>
    );
};
export default FrontRightContact;