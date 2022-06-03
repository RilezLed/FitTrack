import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, SafeAreaView, Button } from 'react-native';
import App from '../../App';
import { RoutineContext } from '../services/routine.context';
import { ExerciseContext } from '../services/exercise.context';
import { ExerciseItem } from './ExerciseItem';
import DropDownPicker from 'react-native-dropdown-picker';
import { ExercisePicker } from './ExercisePicker';
import { LogContext } from '../services/log.context';


export const RoutineItems = ({ listExercises }) => {
    const {
        routineName = "Default Routine",
        exercises = [{}],
    } = listExercises
    const [isComplete, setIsComplete] = useState(false);
    const [colorBack, setColorBack] = useState('red');
    const [modalVisible, setModalVisible] = useState(false);
    const [exerciseList, setExercisesList] = useContext(ExerciseContext);
    const [logList, setLogList] = useContext(LogContext);
    const [currRoutine, setCurrRoutine] = useState("");
    //const [numberPicks, setNumberPicks] = useState(1);

    const toggleColor = () => {
        // (isComplete ? setIsComplete(false) : setIsComplete(true));
        // (isComplete ? setColorBack('red') : setColorBack('green'));
        // (isComplete ? Alert.alert("Setting Routine to Incomplete") : (Alert.alert("Setting Routine to Complete")));
        (!modalVisible ? setModalVisible(true) : setModalVisible(false));
        (setCurrRoutine(listExercises.routineName))
    }



    return (

        <TouchableOpacity onPress={toggleColor}>
            <View style={[styles.item, { backgroundColor: "skyblue" }]}>
                <View style={styles.itemleft}>
                    <Text style={styles.text}>{listExercises.routineName} </Text>
                    <Modal visible={modalVisible}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.item}>
                                <Text>Below are the exercises for you routine: {routineName}</Text>
                                {/* <ExerciseItem /> */}
                            </View>
                            {/* {listExercises.map((a) => { <Text>hi</Text> })} */}
                            {/* <Button title="Add Another Exercise" onPress={() => setNumberPicks(numberPicks + 1)} /> */}
                            {
                                !logList.state.routines ? (
                                    <Button title="Add Completed Routine to Log" onPress={
                                        () => {
                                            setLogList({ routines: { routineName: currRoutine } }); Alert.alert("Added to List"); console.log(logList)
                                        }} />) : (

                                    <Button title="Add Completed Routine to Log" onPress={
                                        () => {
                                            setLogList({ routines: [...logList.state.routines, { routineName: currRoutine }] });
                                            Alert.alert("Added to List");
                                            console.log(logList)
                                        }} />)
                            }

                            <Button title="exit" onPress={() => { setModalVisible(false) }} />
                        </SafeAreaView>
                    </Modal>
                </View>
                <View style={styles.item}></View>
            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    item: {
        flex: 1,
        backgroundColor: 'deepskyblue',
        padding: 5,
        borderRadius: 10,
        maxHeight: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyConent: 'space-around',
        margin: 5,

    },
    itemMain: {
        margin: 10,
        flex: 1,
        backgroundColor: 'deepskyblue',
        padding: 5,
        borderRadius: 10,
        maxHeight: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyConent: 'space-around',
        margin: 5,

    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {},
    sqaure: {},
    text: {
        color: 'white',
        fontSize: 20,
    },

});


