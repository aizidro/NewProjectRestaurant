import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, LogBox } from 'react-native';
import styles from './styles'
// import ItemPedido from '../../components/item';

    const PedidosScreen = ({ navigation }) => {

        const [pedidos, setPedidos] = useState([]);
        const uri = 'http://localhost:3000/pedido';
        useEffect(() => {
            fetch(uri, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // Filtrar os pedidos que não têm clienteId igual a 2
                    const filteredPedidos = data.filter(item => item.clienteId !== 2 && !item.dataEntrega);
        
                    // Definir a lista de pedidos filtrados no estado
                    setPedidos(filteredPedidos);
                });
        }, []);
        

        const concluirPedido = (id, clienteId) => {
            const corpo = {
                id: id,
                dataEntrega: new Date(),
            }
            if (clienteId !== 2) corpo.dataEntrega = new Date();

            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(corpo)
            };
            fetch(uri, options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 202) {
                        navigation.navigate('Login');
                    } else {
                        alert('Erro ao concluir pedido!');
                    }
                });
        }


        return (
            <View style={styles.container}>
                {pedidos.length > 0 && <FlatList
                    data={pedidos}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.pedido}>
                                <Text style={styles.text}>Id: {item.id}</Text>
                                <Text style={styles.text}>
                                    Data: {item.dataPedido.toString().slice(0, 10) + " "}
                                    Hora: {item.dataPedido.toString().slice(11, 16)}
                                </Text>
                                <Text style={styles.text}>Entrega: {item.clienteId == 2 ? "Não" : "Sim"}</Text>
                                <Text>valor: R${item.valorPedido.toFixed(2)}</Text>
                                {/* <ItemPedido item={item.itens} /> */}
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => concluirPedido(item.id, item.clienteId)}
                                >
                                    <Text style={styles.buttonText}>Concluído</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />}
                {pedidos.length === 0 && (
                    <Text>Nao há pedidos no momento</Text>
                )}
            </View>
        );
    }

export default PedidosScreen;