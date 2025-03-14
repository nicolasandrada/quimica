import './gesture-handler';

import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Ventas from './ventanas/Ventas';
import Inicio from './ventanas/Inicio';


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Notifications')}>
        Go to notifications
      </Button>
    </View>
  );
}

function NotificationsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()}>ir al Inicio</Button>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  screens: {
    Inicio: Inicio,
    Notificaciones: NotificationsScreen,
    Ventanas: Ventas
  },
});

const Navigation = createStaticNavigation(Drawer);

export default function App() {
  return <Navigation />;
}