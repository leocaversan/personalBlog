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
                    description={'Data Analytics with experience in python, SQL, Power BI and Tableau.'}
                    img={imgLine}
                />
            </div>
            <div className={style.tittles}>
                <div>
                    <Topics
                        img={imgExperience}
                        tittle={"Professional experience"}
                    />

                    <ExperienceCards
                        timeBegin={"2021"}
                        timeFinaly={"Actual experience"}
                        tittle={"Data Analytics at Deloitte"}
                        description={"Realize the ETL operations using python to extract and transform the data and power BI or Excel to load ensuring integrity and validation of data after extraction and transformation."}
                        color={true}
                    />
                    <ExperienceCards
                        timeBegin={"2020 - 2021"}
                        timeFinaly={"Last experience"}
                        tittle={"Trainee of help desk and service at CPFL"}
                        description={"Solve problems related to Office 365 integration realize calls to Microssoft São Paulo and Microssoft India. Created app webscraping in python to get info in CRM aplication and RPA to atomate the process of open tickets."}
                        color={false}
                    />
                </div>
                <div>
                    <Topics
                        img={imgEducation}
                        tittle={"Academic experience"}
                    />

                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Analysis And Systems Development - IFSP"}
                        description={"Devoloper front-end using frameworks react and angular with Typescript and microservices in python, GoLang and NodeJs, work with Java and MySQL."}
                        color={false}
                    />
                    <ExperienceCards
                        timeBegin={"2023"}
                        timeFinaly={"Actual experience"}
                        tittle={"Mathematics - IFSP"}
                        description={"Developing logical reasoning through calculation, physics and other exact subjects"}
                        color={true}
                    />
                </div>
            </div>
            <div className={style.skills}>
                <Skills
                    tittle={"Soft Skills"}
                    skills={
                        ["HTML", "CSS", "REACT"]
                    }
                />
                <Skills
                    tittle={"Hard Skills"}
                    skills={
                        ["HTML", "Css", "REACT", "ANGULAR", "TypeScript",
                            "Python", "SQLServer", "PostGres", "GoLang", "MongoDB",
                            "AWS", "NodeJs", "MachineLearning", "Docker", "Kubernets"]
                    }
                />
            </div>
        </div>
    );
}

export default FrontRightResume;