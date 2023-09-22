import CardSkills from './CardSkills';
import style from './Skills.module.css'

import { SkillsProps } from '../../../Props/props'

const Skills = ({ tittle, skills }: SkillsProps) => {
    return (
        <div className={style.container}>
            <h1>{tittle}</h1>
            <div>
                {skills.map((skills, index) => (
                    <CardSkills skill={skills} key={index} />
                ))}
            </div>
        </div>
    );

};

export default Skills;