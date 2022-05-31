import React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';

export const RoutineEdit = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
        <View style={{
            flex: 1,
            width: 250,
            height: 500,
        }}>
            <View style={{
                flex: 1,
                height: 100,
                alignSelf: 'center',
                flexGrow: '.8',
                flexShrink: 1,
            }} />
            <View style={{
                flex: 1,
                height: 100,
                justifyContent: 'space-evenly',
                alignSelf: 'center',
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
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