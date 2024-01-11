import React from 'react'
import { View, Image } from 'react-native'
import { styles } from '../util/styles';

const StarRating = ({stars}) => {
    const star: number[] = [];
    for(let i = 0; i < stars; i ++)
        star.push(0);
    return (
        star.map((index: number) => (
            <Image style={styles.starImage} source={require("../assets/star.png")}/>
        ))
    )
}

export default StarRating