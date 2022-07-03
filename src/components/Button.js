import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Color'

const Button = ({ title, onPress }) => {

    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({

    button: {

        maxWidth:100,
        maxHeight:100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        borderColor: Colors.button,
        borderWidth: 2
    },
    pressed:{
        opacity:0.7
    },
    buttonText: {
        color: Colors.button,
        fontSize: 20
    },
    text: {
        paddingTop: 100,
        alignContent: 'center'
    }
})