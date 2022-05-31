import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoutineItems } from '../components/RoutineItems';
import { ScrollView } from 'react-native';


export const Routines = (props) => {
    const navigation = useNavigation();
    const { onPress, title = 'Save' } = props;
    return (
        <View style={{
            flex: 1,
        }}>
            <ScrollView style={{
                flex: 1,
                //alignSelf: 'center',
                //alignItems: 'center',
                alignContent: 'center',
                backgroundColor: 'white',
            }}>
                <RoutineItems />


            </ScrollView>

            <View style={{
                flex: 1,
                height: 100,
                justifyContent: 'space-evenly',
                alignSelf: 'center',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'skyblue',
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                }}>
                    <Button onPress={() => navigation.navigate("Edit Routine")} title="Select" /></View>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                }}>
                    <Button onPress={() => navigation.navigate("New Routine")} title="New" />
                </View>

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