import * as React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default function Inicio(){
    return (
        <View style={styles.container}> 
            <Text>hola</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex:0.5,
        backgroundColor: '#43',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

}
)