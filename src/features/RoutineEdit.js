import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { RoutineContext } from '../services/routine.context';
import { TextInput } from 'react-native-paper';

export const RoutineEdit = ({ addRoutine }) => {
    const [listRoutines, setListRoutines] = useContext(RoutineContext)
    console.log("This is the state")
    console.log(RoutineContext)

    // const [exercisesInList, setExerciseInList] = useState();
    // console.log("This is exercises in List")
    // console.log(exercisesInList)

    const [routineName, setRoutineName] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.containerSub}>
                <TextInput onChangeText={setRoutineName} label="Name:" />
                {!listRoutines.state.routines ? (
                    <Button title="Update Log" onPress={
                        () => setListRoutines({ routines: [{ routineName: routineName, exercises: ["Arm Day"] }] })} />) : (

                    <Button title="Update Log" onPress={
                        () => setListRoutines({ routines: [...listRoutines.state.routines, { routineName: routineName, exercises: ["Arm Day"] }] })} />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
    },
    containerSub: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})