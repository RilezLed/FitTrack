import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExerciseItem } from '../components/ExerciseItem';


export const Exercises = () => {

    const navigation = useNavigation();
    const [exerciseItems, setExcerciseItems] = useState([]);

    const testList = ([
        { name: "Bench Press", muscleGroup: "Back" },
    ]);

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
                {exerciseItems.length == 0 ? (<View><Text style={styles.text}>No Exercises Yet! Click New to Add</Text></View>) : (<View>

                    {
                        testList.map((item, index) => (<ExerciseItem exerciseProps={item}></ExerciseItem>))
                    }
                </View>)
                }



            </ScrollView>

            <View style={{
                flex: 1,
                height: 100,
                justifyContent: 'space-evenly',
                alignSelf: 'center',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                }}>
                    <Button onPress={() => navigation.navigate("Edit Exercises")} title="Select" /></View>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                }}>
                    <Button onPress={() => navigation.navigate("New Exercise")} title="New" />

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