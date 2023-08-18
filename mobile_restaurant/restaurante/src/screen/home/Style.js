import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor:'rgba(255,99,71,1) '
    },
    image: {
        width: 230, height: 230
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        width: "60%",
        alignItems: 'center',
        margin: 20,
    },
    textBotao:{
        fontSize: 17,
        fontweight: 'bold',
        color: 'white',
    },
    text:{
        fontSize: 60,
        fontFamily: 'dina',
        fontweight:700
    },
    text2:{
        fontSize: 25,
        lineHeight: 1,
        marginLeft: 100,
    }
})

export default styles