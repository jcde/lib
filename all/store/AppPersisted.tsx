import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
const { persistor, store } = configureStore();

/*Native
import { ScrollView, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//const Tab = createBottomTabNavigator();
//import { enableScreens } from 'react-native-screens';
//enableScreens();


function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!
      // healpix.component" Healpix low neighbors
      </Text>
    </View>
  );
}
*/
const AppPersisted = (props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);
export default AppPersisted;
