import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView } from 'react-native';

export const Log = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a log of all your progress!</Text>
            <ScrollView>
                <Text style={{ fontSize: 200 }}>Yo</Text>

            </ScrollView>
            <View style={styles.containerSub}>
                <Button title="Clear Log" />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        backgroundColor: 'skyblue'
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
        alignSelf: 'center',
    },
})