import style from './FrontRightHome.module.css';

import AboutMe from './AboutMe';
import CardsExperience from './CardsExperience';
import imgLine from '../../Assets/imgs/imgLine.svg'

const FrontRight = () => {
    return (
        <div className={style.container}>
            <div className={style.AboutMe}>
                <AboutMe
                    tittle={'About Me'}
                    description={'Data Analytics, developer front-end using frameworks wich React and Angular and back-end using Python, Go, Node, TypeScript and JavaScript.'}
                    img = {imgLine}
                />

            </div>
            <div className={style.teste}>
                <h1>Experience</h1>
            </div>
            <div className={style.Experience}>
                <div className={style.ExperienceCards}>
                    <CardsExperience
                        color={false    }
                        img={undefined}
                        tittle={'Data Analyst'}
                        description={'Execute Python ETL scripts for data extraction, transformation, and loading (ETL). Create data models and design dashboards in Power BI and Tableau for data analysis and visualization.'}
                    />
                    <CardsExperience
                        color={true}
                        img={undefined}
                        tittle={'Machine Learning'}
                        description={'Supervising machine learning model development using Naive Bayes, Random Forest, and Decision Trees for enhanced insights.'}
                    />
                </div>
                <div className={style.ExperienceCards}>
                    <CardsExperience
                        color={false}
                        img={undefined}
                        tittle={'Web Development'}
                        description={'Created and deploy App in React and Angular TypeScript, HTML and CSS with experience in TailWindCss too.'}
                    />
                    <CardsExperience
                        color={true}
                        img={undefined}
                        tittle={'BackEnd Developer'}
                        description={'Created and deploy by arquiteture REST in amazon AWS LAMBDA with Python, NodeJs and Go. Using "Serviless" Framework or container bu deploy.'}
                    />
                    <CardsExperience
                        color={false}
                        img={undefined}
                        tittle={'DevOps'}
                        description={'Experience in Container, Docker Compose and Kubernets.'}
                    />
                </div>
            </div>
        </div>
    );
}

export default FrontRight;