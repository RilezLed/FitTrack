import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LogItem = ({ logOfRoutines = {} }) => {

    const {
        routineName = "Arm Day", wasCompleted = true, routineInfo = "3x5 curl \n 4X10 pushup \n 3x8 bench press"
    } = logOfRoutines;

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <Text style={styles.text}>{routineName}</Text>

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


