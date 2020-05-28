import React from "react"
import styles from "./Button.module.css";
import {NavLink} from "react-router-dom";

type OwnPropsType = {
    path: string
    onClick: () => void
    text: string
}
type PropsType = OwnPropsType

const Button: React.FC<PropsType> = (props) => {
    const onButtonClick = () => {
        props.onClick()
    }
    return (
        <NavLink to={props.path} className={styles.buttonWrapper}>
            <p onClick={onButtonClick}>
                {props.text}
            </p>
        </NavLink>
    )
}
export default Button