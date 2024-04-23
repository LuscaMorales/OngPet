import { StyleSheet } from "react-native";


const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    darkbg: {
      backgroundColor: "#333"
    },
    login_error:(text='none')=>({
      fontWeight: "bold",
      fontSize: 22,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display:text
    }),
    loginHeader:{
      alignSelf:"center",
      fontSize: 40,
      marginBottom:50,
      color: 'white'
    },
    login_form:{
      width: "80%"
    },
    login_input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },
    login_buttom:{
      padding: 12,
      backgroundColor: "#F58634",
      alignSelf: "center",
      borderRadius: 5
    },
    login_buttomGeral:{
      padding: 12,
      marginTop: 30,
      backgroundColor: "#63C1E0",
      alignSelf: "center",
      borderRadius: 5
    },
    login_buttonText:{
      fontWeight: "bold",
      fontSize: 22,
      color: "#333"
    },
    HeaderAR:{
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      marginBottom: 15,
      marginTop: 30 
    },
    DadosText:{
      alignSelf:"center",
      fontSize: 20,
      marginBottom:20,
      color: 'white'
    },
});

export {css};