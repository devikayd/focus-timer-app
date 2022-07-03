import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FocusItems from './src/components/FocusItems';


import FocusScreen from './src/screens/FocusScreen';
import Timer from './src/screens/Timer';
import { Colors } from './src/utils/Color';

export default function App() {

  const [currentSubject, setCurrentsubject] = useState(null);
  const [focusItems, setFocusItems] = useState([])

  return (
    <View style={styles.container}>
      {!currentSubject ?
        <>
          <FocusScreen addSubject={setCurrentsubject} />
          <FocusItems items={focusItems} />
        </>
        : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) =>{setFocusItems([...focusItems,subject])} }
            onClearSubject={() => { setCurrentsubject(null) }} />
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color1,
  },
});
