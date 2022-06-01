import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, ScrollView } from 'react-native';
import { LogItem } from '../components/LogItem';
import { useNavigation } from '@react-navigation/native';
import { LogContext } from '../services/log.context';

export const Log = () => {
    //const { onPress, title = 'Save' } = props;
    //const [logItems, setLogItems] = useState(["Tube"]);
    //const logList = useNavigationParam('logList');
    //console.log({route.params.list});
    const msg = useContext(LogContext);


    function clearLog() {
        setLogItems([]);
        console.log("done with clear");
    }
    function updateLog(newStuff) {
        setLogItems([newStuff]);
        console.log("Updated");
    }
    const logContext = useContext(LogContext);
    return (

        <View style={styles.container}>
            <Text style={styles.text}>This is a log of all your progress!</Text>
            <Text>{msg}</Text>
            <ScrollView>
                <LogItem>{logContext.logOfRoutines}</LogItem>
                {/*  {logItems.length < 1 ? (<View><Text style={styles.text2}>Nothing in your log yet! Get lifting you slacker!</Text></View>) : (<View>

                    {
                        logItems.map((item, index) => {
                            return <LogItem text={item} />
                        })
                    }
                </View>)
                } */}


            </ScrollView>
            <View style={styles.containerSub}>
                {/* <Button title="Clear Log" onPress={() => clearLog()} /> */}

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