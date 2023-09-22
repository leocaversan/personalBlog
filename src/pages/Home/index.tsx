import React, { useState } from 'react';

import style from './Home.module.css'

import Header from '../../components/Header'
import FrontLeft from '../../components/FrontLeft';
import FrontRightHome from '../../components/FrontRightHome';
import SocialCard from '../../components/SocialCard';
import FrontRightResume from '../../components/FrontRightResume';
import FrontRightWork from '../../components/FrontRightWork';
import FrontRightContact from '../../components/FrontRightContact';

import imgButtonHomeActivate from '../../Assets/imgs/Button/Home/imgButtonHomeActivate.svg'
import imgButtonHomeDeactivate from '../../Assets/imgs/Button/Home/imgButtonHomeDeactivate.svg'
import imgButtonResumeActivete from '../../Assets/imgs/Button/Resume/imgButtonResumeActivate.svg'
import imgButtonResumeDeactivate from '../../Assets/imgs/Button/Resume/imgButtonResumeDeactivate.svg'
import imgButtonWorkActivate from '../../Assets/imgs/Button/Work/imgButtonWorkActivate.svg'
import imgButtonWorkDeactivate from '../../Assets/imgs/Button/Work/imgButtonWorkDeactivete.svg'
import imgButtonContactActivate from '../../Assets/imgs/Button/Contact/imgButtonContactActiveted.svg'
import imgButtonContactDeactivate from '../../Assets/imgs/Button/Contact/imgButtonContactDeactivete.svg'
import moonLight from '../../Assets/imgs/moonLight.svg'
import moonDark from '../../Assets/imgs/moonDark.svg'
const Home = () => {

    const [home, setHome] = useState(true);
    const [resume, setResume] = useState(false);
    const [work, setWork] = useState(false);
    const [contact, setContact] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <div className={darkTheme ? style.container1 : style.container2}>
            <div>
                <Header
                    name={'Leonardo Caversan Moi'}
                    img={darkTheme ? moonLight : moonDark}
                    theme={darkTheme}
                    functionOnClineTheme={() => { setDarkTheme(!darkTheme); }} />
            </div>
            <div className={style.buttons}>
                <div>
                    <SocialCard
                        img={home ? imgButtonHomeActivate : imgButtonHomeDeactivate}
                        functionOnClick={() => {
                            setHome(true)
                            setResume(false)
                            setWork(false)
                            setContact(false)
                        }}
                        backgroundColor={home} />
                    <SocialCard
                        img={resume ? imgButtonResumeActivete : imgButtonResumeDeactivate}
                        functionOnClick={() => {
                            setHome(false)
                            setResume(true)
                            setWork(false)
                            setContact(false)
                        }}
                        backgroundColor={resume} />
                    <SocialCard
                        img={work ? imgButtonWorkActivate : imgButtonWorkDeactivate}
                        functionOnClick={() => {
                            setHome(false)
                            setResume(false)
                            setWork(true)
                            setContact(false)
                        }}
                        backgroundColor={work} />
                    <SocialCard
                        img={contact ? imgButtonContactActivate : imgButtonContactDeactivate}
                        functionOnClick={() => {
                            setHome(false)
                            setResume(false)
                            setWork(false)
                            setContact(true)
                        }}
                        backgroundColor={contact} />
                </div>
            </div>
            <div className={style.body}>
                <div className={style.body_left}>
                    <FrontLeft />
                </div>
                <div className={style.body_right}>
                    {
                        home && (
                            <FrontRightHome />
                        )
                    }
                    {
                        resume && (
                            <FrontRightResume />
                        )
                    }
                    {
                        work && (
                            <FrontRightWork />
                        )
                    }
                    {
                        contact && (
                            <FrontRightContact />
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Home;