import React from 'react';
import NamesAndNaming from './NamesAndNaming/NamesAndNaming';
import styles from './NamesWrapper.module.css'

const data = [
    {
        icon: 'icon-40.svg',
        title: 'Names For Sale',
        text: 'Hand-picked collection of premium names with a matching URL',
        buttonText: 'Explore Names For Sale',
        buttonLink: 'google.com',
    },
    {
        icon: 'icon-7.svg',
        title: 'Naming Contests',
        text: 'Custom name suggestion from 100s of naming experts as you are guided through our agency-style process',
        buttonText: 'Launch a Contest',
        buttonLink: 'google.com',
    }
]
const NamesWrapper = () => {
    return (
        <div className={styles.mainWrapper}>
        <NamesAndNaming data={data[0]}/>
        <NamesAndNaming data={data[1]}/>
        </div>
    );
}

export default NamesWrapper;
