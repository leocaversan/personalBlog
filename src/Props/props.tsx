export interface HeaderProps {
    name:string,
    img:any
    theme:boolean,
    functionOnClineTheme : () => void
}

export interface CardContactProps {
    img:any,
    name:string,
    description:string
}
export interface AboutMeProps {
    tittle:string,
    description:string
    img:any
}
export interface CardsExperienceProps extends AboutMeProps{
    color:boolean,
    img:any
}
export interface SocialCardProps {
    img:any,
    functionOnClick: () => void
    backgroundColor:boolean
}

export interface TopicsProps {
    img:any,
    tittle:string,
}
export interface ExperienceCardsProps {
    timeBegin:string,
    timeFinaly:string
    tittle:string,
    description:string,
    color:boolean
}
export interface CardSkillProps {
    skill:string
}
export interface SkillsProps {
    tittle:string,
    skills:string[]
}
export interface CardContactinfoProps {
    color:boolean,
    img:any,
    tittle:string,
    arrayDescription:string[];
}
export interface CardMessageProps {
    description:string, 
    input1:string, 
    input2:string, 
    input3:string, 
    buttonName:string, 
    functionButton: () => void,
}
export interface InputsProps {
    name:string,
}