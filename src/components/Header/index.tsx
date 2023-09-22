import style from './Header.module.css';
import { HeaderProps } from '../../Props/props';

const Header = ({name, img, theme,functionOnClineTheme}:HeaderProps) => {
    return(
        <div 
            className={style.header}
            onClick={functionOnClineTheme}>
            <div className={theme ? style.header_name_light : style.header_name_dark}>
                {name}
            </div>
            <div className={theme ? style.header_mode_light : style.header_mode_dark}>
                <img 
                    src={img} 
                    alt="" />
            </div>
        </div>
    );
};

export default Header;