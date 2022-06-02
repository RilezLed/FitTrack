import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView } from 'react-native';
import { LogItem } from '../components/LogItem';
import { useNavigation } from '@react-navigation/native';
import { LogContext, LogContextProvider } from '../services/log.context';

export const Log = ({ clear }, { update }) => {
    //const { onPress, title = 'Save' } = props;
    const logContext = useContext(LogContext);
    console.log(logContext);
    const testArray2 = [
        { routineName: "Arm Day" },
        { routineName: "Back Day" },
        { routineName: "Leg Day" }]
    const singUP = { routineName: "Arm Day" };
    const [logItems, setLogItems] = useState(logContext);
    //const logList = useNavigationParam('logList');
    //console.log({route.params.list});
    //const msg = useContext(LogContext);
    // const logContext = useContext(LogContext);

    const clearLog = () => {
        setLogItems([]);
        console.log("done with clear");

    }
    const updateLog = (newStuff) => {
        console.log(logItems);
        setLogItems([...logItems, newStuff]);
        console.log("Updated");
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>This is a log of all your progress!</Text>
            <ScrollView style={styles.containerSub}>
                {/* {logItems.map((item, index) => (<LogItem routine={item}></LogItem>))} */}
                {logItems.length == 0 ? (<View><Text style={styles.text2}>Nothing in your log yet! Get lifting you slacker!</Text></View>) : (<View>

                    {
                        // logItems.map((item, index) => {
                        //     return <LogItem routine={item} />
                        // })
                        logItems.map((item, index) => (<LogItem routine={item}></LogItem>))
                    }
                </View>)
                }


            </ScrollView>
            <View style={styles.containerSub}>
                <Button title="Clear Log" onPress={() => { clearLog() }} />
                <Button title="Update Log" onPress={() => { updateLog(singUP) }} />
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
        flex: .6,
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
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'center',
    },
    text2: {
        padding: 10,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
    },
})