import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoutineItems } from '../components/RoutineItems';
import { ScrollView } from 'react-native';
import { RoutineContext } from '../services/routine.context';


export const Routines = () => {
    const navigation = useNavigation();
    const [listRoutines, setListRoutines] = useContext(RoutineContext)
    console.log("This is the state")
    console.log(listRoutines)
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
                {/* <RoutineItems /> */}

                {/* {logItems.map((item, index) => (<LogItem routine={item}></LogItem>))} */}
                {!listRoutines.state.routines || listRoutines.state.routines.length < 1 ? (

                    <View><Text style={styles.text2}> No routines yet! Add a Routinex!</Text></View>) : (<View>

                        {
                            // logItems.map((item, index) => {
                            //     return <LogItem routine={item} />
                            // })
                            listRoutines.state.routines.map((item, index) => (<RoutineItems listExercises={item}></RoutineItems>))
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
                    <Button title="Clear Routines" onPress={() => setListRoutines({ routines: [] })} />
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