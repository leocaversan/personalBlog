import style from './CardSkill.module.css';
import { CardSkillProps } from '../../../../Props/props'

const CardSkills = ({ skill }: CardSkillProps) => {
    return (
        <span className={style.container}>
            {skill}
        </span>
    );
};

export default CardSkills;