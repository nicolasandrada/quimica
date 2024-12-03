import * as React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function Inicio(){
    return (
        <View style={styles.container}>
            <Text>Bienvenido a StockInVent</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0DE8E4',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

}
)