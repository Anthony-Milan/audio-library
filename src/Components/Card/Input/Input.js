import React from 'react'
import styles from "./input.module.css"
const Input=(props)=> {
    let inputElem= null;
    switch (props.inputtype) {
        case ('input'):
            inputElem= <input className={styles.InputElem} {...props}/>
            break;
        case('textarea'):
            inputElem=<textarea className={styles.InputElem}{...props}/>;
            break;
        case('submit'):
            inputElem=<input className={styles.Submit}onClick={props.checkTooltip}{...props}/>
            break;
        default:
            inputElem=<input className={styles.InputElem} {...props}/>
            break;
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label><br/>
            {inputElem}
        </div>
    )
}

export default Input;