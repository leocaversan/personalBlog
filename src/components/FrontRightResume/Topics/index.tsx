import style from './Topics.module.css'
import { TopicsProps } from '../../../Props/props'


const Topics = ({ img, tittle }: TopicsProps) => {
    return (
        <div className={style.container}>
            <img
                src={img}
                alt=""
            />
            {tittle}
        </div>
    );
}
export default Topics;