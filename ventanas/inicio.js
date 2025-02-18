import * as React from 'react';
import { View, StyleSheet, Text, TextInput, Button, FlatList } from 'react-native';

export default function Inicio(){
    const [productos, setProductos] = React.useState([
        { nombre: 'Lavandina', cantidad: 10, precio: 100 },
    ]);


    return (
        <View style={styles.container}>
        
            <Text style={styles.alerta}>Bienvenido a StockInVent</Text>
            <View style={styles.agruparlat}>
                <Text>Producto: </Text>
                <TextInput style={styles.input}/>
            </View>
            
            <View style={styles.agruparlat}>
                <Text>cantidad: </Text>
                <TextInput style={styles.input} keyboardType='numeric'/>
            </View>

            <View style={styles.agruparlat}>
                <Text>Precio: </Text>
                <TextInput style={styles.input} keyboardType='numeric'/>
            </View>

            <Button title="Agregar Producto"/>

            <Text style={styles.tituloLista}>Lista de Productos</Text>
            <FlatList
                data={productos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.fila}>
                        <Text style={styles.columna}>{item.nombre}</Text>
                        <Text style={styles.columna}>{item.cantidad}</Text>
                        <Text style={styles.columna}>${item.precio}</Text>
                    </View>
                )}
            />
                
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0DE8E4',
        padding: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flex: 1,
      },

    alerta:{
        color: 'red',
        fontSize: 20,
    },
    agruparlat:{
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    tituloLista: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    columna: {
        flex: 1,
        textAlign: 'center',
    },
    

}
)