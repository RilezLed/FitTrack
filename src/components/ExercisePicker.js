import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, SafeAreaView, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ExerciseContext } from '../services/exercise.context';

export const ExercisePicker = () => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        (!open ? setOpen(true) : setOpen(false));
    }

    const [listOfExercises, setListOfExercises] = useContext(ExerciseContext);

    console.log("This is a list of exercises");
    console.log(listOfExercises.state.exercises);

    const [choices, setChoices] = useState(listOfExercises.state.exercises);
    const [choiceDetails, setChoiceDetails] = useState([])

    console.log('these are choices')
    console.log(choices)



    return (
        <DropDownPicker
            items={[{ label: "Bicep Curl", value: "Curls" }, { label: "Tricep Press", value: "Press" }, { label: "Leg Press", value: "Leg Press" }, { label: "Delete", value: "Delete" }]}
            defaultIndex={1}
            open={open}
            onPress={toggleOpen}
            //setOpen={setOpen}
            containerStyle={{ height: 40 }}
            onChangeItem={item => console.log(item.label, item.value)}
        />
    )
}
