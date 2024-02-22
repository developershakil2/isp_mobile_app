import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {ContextComponent} from "./utilities";
import Route from './Route';
export default function App() {
    
  return (
    <ContextComponent>
      <Route/>
    </ContextComponent>
   
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
