import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ExerciseItem } from '../components/ExerciseItem';
import { ExerciseContext } from '../services/exercise.context';


export const Exercises = () => {
    const [listExercises, setListExercises] = useContext(ExerciseContext);
    const navigation = useNavigation();
    console.log(listExercises);
    // const testList = ([
    //     { name: "Bench Press", muscleGroup: "Back" },
    // ]);

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
                {!listExercises.state.exercises || listExercises.state.exercises.length < 1 ? (

                    <View><Text style={styles.text2}> Nothing in your log yet! Get lifting you slacker!</Text></View>) : (<View>

                        {
                            // logItems.map((item, index) => {
                            //     return <LogItem routine={item} />
                            // })
                            listExercises.state.exercises.map((item, index) => (<ExerciseItem exercises={item}></ExerciseItem>))
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
                    <Button onPress={() => navigation.navigate("Edit Exercises")} title="Edit" /></View>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                }}>
                    <Button onPress={() => navigation.navigate("New Exercise")} title="New" />
                    <Button title="Clear Log" onPress={() => setListExercises({ exercises: [] })} />
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