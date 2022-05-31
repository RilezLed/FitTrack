import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Homescreen } from './src/screens/Homescreen';
import { Exercises } from './src/screens/Exercises';
import { ExerciseEdit } from './src/features/ExerciseEdit';
import { Log } from './src/screens/Log';
import { Routines } from './src/screens/Routines';
import { RoutineEdit } from './src/features/RoutineEdit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutineItems } from './src/components/RoutineItems';
import { ExerciseItems } from './src/components/ExerciseItem';
import { LogContextProvider } from './src/services/log.context';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <LogContextProvider>
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
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="New Routine" component={RoutineEdit} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Edit Exercises" component={ExerciseEdit} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="New Exercise" component={ExerciseEdit} />
          </Stack.Group>

        </Stack.Navigator>
      </NavigationContainer >
    </LogContextProvider>
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
