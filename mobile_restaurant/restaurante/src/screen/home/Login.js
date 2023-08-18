import React from "react";
import  {View, Text, Image, TouchableOpacity} from "react-native";
import styles from './Style'
export default function Login({navigation}){

  function trocaTela(){
    navigation.navigate('Pedidos')
  }
    return (
        <View style={styles.container}>
           <Image
        source={require('../../../assets/bicicleta-de-entrega.png')}
        style={styles.image}
        />
      <Text style={styles.text}>Motoboy</Text>
      <Text style={styles.text2}>Entregas</Text>
      <TouchableOpacity
        onPress={()=>{trocaTela()}}
                style={styles.button}
                >
                <Text style={styles.textBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}