import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import MoreInfo from './screens/MoreInfo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stak = createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stak.Navigator>
          <Stak.Screen name='MainScreen' component={MainScreen} options={{headerShown: false, cardStyle: {backgroundColor: 'black',alignItems: 'center',justifyContent: 'center',}}}/>
          <Stak.Screen name='MoreInfo' component={MoreInfo} options={{headerShown: false, cardStyle: {backgroundColor: '#242424'}, presentation: 'modal'}}/>
        </Stak.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
