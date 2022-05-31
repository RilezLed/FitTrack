import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';

export const ExerciseEdit = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
        <View style={styles.container}>
            <View style={styles.containerSub}>

                <Text style={styles.text}>EDIT ME!</Text>

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