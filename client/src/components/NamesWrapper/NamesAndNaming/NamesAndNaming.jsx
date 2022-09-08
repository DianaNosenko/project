import React from 'react';
import styles from './NamesAndNaming.module.css'

const NamesAndNaming = (props) => {
     const {icon, title, text, buttonText, buttonLink} = props.data;
    return (
        <div className={styles.wrapper}>
            <article className={styles.headerArticle}>
                <img width='50px' src={icon}></img>
                <span>{title}</span>   
            </article>
            <article className={styles.textArticle}>{text}</article>
            <article className={styles.buttonArticle}>
                <a href={buttonLink}>{buttonText}</a>
            </article>
        </div>
    );
}

export default NamesAndNaming;