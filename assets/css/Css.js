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
    login_buttonText:{
      fontWeight: "bold",
      fontSize: 22,
      color: "#333"
    }
});

export {css};