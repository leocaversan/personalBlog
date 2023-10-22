import AboutMe from "../FrontRightHome/AboutMe";
import style from './FrontRightResume.module.css'
import Topics from "./Topics";

import imgLine from '../../Assets/imgs/imgLine.svg'
import imgEducation from '../../Assets/imgs/Resume/imgEducation.svg'
import imgExperience from '../../Assets/imgs/Resume/imgExperience.svg'
import ExperienceCards from "./ExperienceCards";
import Skills from "./Skills";
const FrontRightResume = () => {
    return (
        <div className={style.container}>
            <div className={style.AboutMe}>
                <AboutMe
                    tittle={'Resume'}
                    description={'Software Enginner Full Stack created microsservices and front developer using react and Angular'}
                    img={imgLine}
                />
            </div>
            <div className={style.tittles}>
                <div>
                    <Topics
                        img={imgEducation}
                        tittle={"Software Engineer"}
                    />

                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Software Engineer full-stack"}
                        description={"Devoloper front-end using frameworks react and angular with Typescript nd microservices in python, GoLang and NodeJs"}
                        color={true}
                    />
                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Software Engineer full-stack"}
                        description={"Devoloper front-end using frameworks react and angular with Typescript nd microservices in python, GoLang and NodeJs"}
                        color={false}
                    />
                </div>
                <div>
                    <Topics
                        img={imgExperience}
                        tittle={"Software Engineer"}
                    />

                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Software Engineer full-stack"}
                        description={"Devoloper front-end using frameworks react and angular with Typescript nd microservices in python, GoLang and NodeJs"}
                        color={false}
                    />
                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Software Engineer full-stack"}
                        description={"Devoloper front-end using frameworks react and angular with Typescript nd microservices in python, GoLang and NodeJs"}
                        color={true}
                    />
                </div>
            </div>
            <div className={style.skills}>
                <Skills
                    tittle={"Soft Skills"}
                    skills={
                        ["HTML", "CSS", "REACT", "ANGULAR", "TYPESCRIPT",
                            "PYTHON", "SQL", "MONGODB", "AWS", "RD2", "IA"]
                    }
                />
                <Skills
                    tittle={"Work Skills"}
                    skills={
                        ["", "", "", "", "", "", "", "", "", "", ""]
                    }
                />
            </div>
        </div>
    );
}

export default FrontRightResume;