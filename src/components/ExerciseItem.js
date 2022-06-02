import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ExerciseItem = ({ exerciseProps = {} }) => {
    const {
        muscleGroup = "Arms",
        name = "Standard Bicep Curl",
        reps = "15",
        sets = "3",
        weight = "50",
    } = exerciseProps

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <Text style={styles.text}>Name of Exercise: {exerciseProps.name} </Text>
                <Text style={styles.text}>Muscle Group: {exerciseProps.muscleGroup} </Text>
                <Text style={styles.text}>Sets X Reps: {exerciseProps.sets} x  {exerciseProps.reps}</Text>
                <Text style={styles.text}>Weight: {exerciseProps.weight} </Text>
            </View>
            <View style={styles.item}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: 'deepskyblue',
        padding: 5,
        borderRadius: 10,
        // maxHeight: 80,
        flexDirection: 'column',
        alignItems: 'left',
        justifyConent: 'space-around',
        margin: 5,

    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'left',
        flexWrap: 'wrap',
    },
    itemText: {},
    sqaure: {},
    text: {
        color: 'white',
        fontSize: 20,
    },

});