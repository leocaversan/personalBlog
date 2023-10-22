
import SocialCard from "../SocialCard";
import imgProfile from "../../Assets/imgs/profile_image.png";
import style from './Front-left.module.css';
import CardContact from "./CardContact";

import imgDownload from '../../Assets/imgs/imgDownload.svg'
// import imgPhone from '../../Assets/imgs/Contact/imgphone.svg'
import imgMail from '../../Assets/imgs/Contact/imgMail.svg'
import imgIconLocation from '../../Assets/imgs/Contact/imgIconLocation.svg'
import imgFacebook from '../../Assets/imgs/SocialMidia/imgFacebook.svg'
import imgLinkdIn from '../../Assets/imgs/SocialMidia/imgLinkdIn.svg'
import imgTwiter from '../../Assets/imgs/SocialMidia/imgTwitter.svg'
import imgGitHub from '../../Assets/imgs/SocialMidia/imgGitHub.svg'

const linkCurriculum = 'https://my-personal-curriculum-download-link.s3.amazonaws.com/Profile+(5).pdf'
const FrontLeft = () => {
    return (
        <div className={style.container}>
            <div className={style.imgProfile}>
                <img src={imgProfile} width={200} height={200} alt="ImgPerfil" />
            </div>
            <div className={style.name}>
                <div>
                    Leonardo Caversan Moi
                </div>
                <div>
                    <p>
                        Data Analyst at Deloitte
                    </p>
                </div>
            </div>
            <div className={style.socialCard}>
                <SocialCard
                    img={imgFacebook}
                    functionOnClick={() => {
                        window.location.href = 'https://www.facebook.com/leo.caversan/'
                    }}
                    backgroundColor={false} />
                <SocialCard
                    img={imgLinkdIn}
                    functionOnClick={() => {
                        window.location.href = 'https://www.linkedin.com/in/leonardo-caversan-moi/'
                    }}
                    backgroundColor={false} />
                <SocialCard
                    img={imgTwiter}
                    functionOnClick={() => {
                        window.location.href = 'https://github.com/leocaversan'
                    }}
                    backgroundColor={false} />
                <SocialCard
                    img={imgGitHub}
                    functionOnClick={() => {
                        window.location.href = 'https://github.com/leocaversan'
                    }}
                    backgroundColor={false} />
            </div>
            <div className={style.cardContact}>
                {/* <CardContact img={imgPhone} name={"Phone"} description={"(19)983488358"} /> */}
                <CardContact
                    img={imgMail}
                    name={"Mail"}
                    description={"leo_caversan@live.com"}
                />
                <CardContact
                    img={imgIconLocation}
                    name={"Location"}
                    description={"Paulinia - São Paulo - Brasil"}
                />
            </div>
            <div className={style.imgDownload}>
                <img
                    src={imgDownload}
                    width={400}
                    height={80}
                    alt=""
                    onClick={
                        () => { window.location.replace(linkCurriculum); }
                    } />
            </div>
        </div>
    );
}

export default FrontLeft;