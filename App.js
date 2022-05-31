import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Homescreen } from './src/features/Homescreen';
import { Exercises } from './src/features/Exercises';
import { Exercise } from './src/features/Exercise';
import { Log } from './src/features/Log';
import { Routines } from './src/features/Routines';
import { RoutineEdit } from './src/features/RoutineEdit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutineItems } from './src/components/RoutineItems';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'deepskyblue',
        },
        headerTintColor: 'floralwhite',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen style={styles.title} r
          name="Home"
          component={Homescreen}
          options={{
            title: 'Time to hit the Gym Again',
          }}
        />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="Routines" component={Routines} />
        <Stack.Screen name="Log" component={Log} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Edit Routine" component={RoutineEdit} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  }
});
