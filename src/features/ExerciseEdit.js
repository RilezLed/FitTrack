import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { ExerciseContext } from '../services/exercise.context';


export const ExerciseEdit = ({ addExercise }) => {
    //const [exerciseInfo, setExerciseInfo] = useState();
    const [listExercises, setListExercises] = useContext(ExerciseContext)
    console.log("This is the state")
    console.log(listExercises)
    //console.log("Exercise Info")
    //console.log(exerciseInfo)



    const [currName, setCurrName] = useState();
    const [currGroup, setCurrGroup] = useState();
    const [currRep, setCurrRep] = useState();
    const [currSet, setCurrSet] = useState();
    const [currWeight, setCurrWeight] = useState();



    return (
        <View style={styles.container}>
            <View style={styles.containerSub}>
                <TextInput onChangeText={setCurrName} label="Name:" />
                <TextInput onChangeText={setCurrGroup} label="Muscle Group:" />
                <TextInput onChangeText={setCurrRep} label="Reps:" />
                <TextInput onChangeText={setCurrSet} label="Sets:" />
                <TextInput onChangeText={setCurrWeight} label="Weight:" />
                {!listExercises.state.exercises ? (
                    <Button title="Update Log" onPress={
                        () => setListExercises({ exercises: [{ muscleGroup: currGroup, name: currName, reps: currRep, set: currSet, weight: currWeight }] })} />) : (

                    <Button title="Update Log" onPress={
                        () => setListExercises({ exercises: [...listExercises.state.exercises, { muscleGroup: currGroup, name: currName, reps: currRep, set: currSet, weight: currWeight }] })} />)
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