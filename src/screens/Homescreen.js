import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ImageBackground } from 'react-native';

const image = require("./../../assets/fitness.jpg");

export const Homescreen = ({ navigation }) => {
    //const { onPress, title = 'Save' } = props;
    const testList = ["li", "s"];
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <View style={styles.containerSub}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Routines')}>
                        <Text style={styles.text}>My Routines</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Exercises')}>
                        <Text style={styles.text}>My Exercises</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Log', { list: testList })}>
                        <Text style={styles.text}>My Log</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        backgroundColor: 'deepskyblue',
    },
    image: {
        flex: 1,
        justifyContent: "center"
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