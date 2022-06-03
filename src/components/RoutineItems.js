import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoutineContext } from '../services/routine.context';

export const RoutineItems = ({ listExercises }) => {
    const {
        routineName = "Default Routine",
        exercises = [{}],
    } = listExercises

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <Text style={styles.text}>{listExercises.routineName} </Text>
            </View>
            <View style={styles.item}></View>
        </View>

    )

}

const styles = StyleSheet.create({
    item: {
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


