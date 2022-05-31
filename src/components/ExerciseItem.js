import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ExerciseItem = () => {
    const muscleGroup = (null);
    const exerciseName = (null);

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <Text style={styles.text}>This is something </Text>
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