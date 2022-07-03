import { View, StyleSheet, Text, Vibration } from 'react-native'
import React, { useState } from 'react'
import { ProgressBar } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake';


import { Countdown } from '../components/Countdown'
import Button from '../components/Button'
import { Colors } from '../utils/Color'
import { Timings } from '../components/Timings'


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];


const Timer = ({ focusSubject, onClearSubject, onTimerEnd }) => {

    useKeepAwake();

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1)

    const onEndHandler = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject)
    }

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEndHandler} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Focus timer is set for {focusSubject}</Text>
                </View>
            </View>
            <ProgressBar progress={progress} color={Colors.progress} style={{ height: 7, margin: 7, borderRadius: 10 }} />
            <View style={styles.timingContainer}>
                <Timings onChangeTime={setMinutes} />
            </View>
            <View style={styles.buttonContainer}>
                {!isStarted ?
                    (
                        <Button title="Start" onPress={() => setIsStarted(true)} />
                    ) : (
                        <Button title="Pause" onPress={() => setIsStarted(false)} />
                    )
                }
            </View>
            <View style={styles.cancelButton}>
                <Button onPress={onClearSubject} title="Cancel" />
            </View>


        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timerContainer: {
        flex: 0.5,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        padding: 23,

    },
    text: {
        color: Colors.timingtitle,
        fontSize: 14
    },
    timingContainer: {
        padding: 25
    },
    buttonContainer: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})