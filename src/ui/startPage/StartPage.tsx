import React from "react";
import styles from './StartPage.module.css'
import Button from "../common/button/Button";

type PropsType = {
    onStartClick: () => void
}

const StartPage: React.FC<PropsType> = (props) => {

   const onButtonClick = () => {
       props.onStartClick()
   }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.title}>
                FIND A PAIR
            </div>
            <div className={styles.rules}>
                Try to find all pairs of cards opening one by one.
            </div>
            <Button path={'/game/'} onClick={onButtonClick} text={'START'}/>
        </div>
    )
}
export default StartPage