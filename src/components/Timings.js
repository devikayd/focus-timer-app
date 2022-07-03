import React, { View, StyleSheet } from 'react-native'
import Button from './Button'

export const Timings = ({ onChangeTime }) => {
    return (
        <View style={styles.buttonContainer} >
            <Button onPress={() => onChangeTime(0.1)} title='10'/>
            <Button onPress={() => onChangeTime(15)} title='15'/>
            <Button onPress={() => onChangeTime(20)} title='20'/>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})