import { StyleSheet, Text, SafeAreaProvider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen';
import Chosen from './components/Chosen';
import Location from './Screens/Location';
import Profile from './Screens/Profile';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} />
          <Stack.Screen
            name="Chosen" 
            component={Chosen}
            options={{headerShown:false}}/>
            <Stack.Screen 
              name="Location" 
              component={Location}
              options={{
                presentation:'modal',
                headerShown:false
              }}
              />
              <Stack.Screen 
                name="profile"
                component={Profile}
                options={
                  {
                    presentation:'fullScreenModa',
                    headerShown:false
                  }
                }/>
          </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
