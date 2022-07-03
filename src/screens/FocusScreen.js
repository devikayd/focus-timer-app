import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Button from '../components/Button'
import { Colors } from '../utils/Color'

const FocusScreen = ({ addSubject }) => {
    const [currentTitle, setCurrentTitle] = useState('')

    return (
        <View style={styles.inputContainer}>
            <TextInput label=' title'
                onChangeText={setCurrentTitle}
                style={styles.textInput} />

            <View style={styles.buttonContainer}>
                <Button onPress={() => { addSubject(currentTitle) }} title="+"/>
            </View>
        </View>
    )

}


export default FocusScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 60,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInput: {
        width: 320,
        backgroundColor: Colors.textBackground,
    },
    buttonContainer: {
        justifyContent: 'center'
    },

})