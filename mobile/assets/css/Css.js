import { StyleSheet } from "react-native";


const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000', // .color5
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    darkbg: {
      backgroundColor: "#000000" // .color5
    },
    images:{
      width: 150,
      height: 150,
      borderRadius: 75,
      alignSelf: 'center',
      marginBottom: 15
    },  
    login_error:(text='none')=>({
      fontWeight: "bold",
      fontSize: 14,
      color: "#FF5252",
      marginTop: 8,
      marginBottom: 12,
      textAlign: "center",
      display: text
    }),
    loginHeader:{
      alignSelf:"center",
      fontSize: 30,
      fontWeight: "bold",
      color: '#FFFFFF',
      letterSpacing: 0.5
    },
    loginSubHeader:{
      alignSelf:"center",
      fontSize: 14,
      color: '#A8E39F',
      marginTop: 4,
      marginBottom: 20,
      textAlign: 'center'
    },
    login_card:{
      width: "100%",
      maxWidth: 400,
      backgroundColor: "#0a1f07", // .color4
      borderRadius: 28,
      padding: 26,
      borderWidth: 1.5,
      borderColor: "#143f0e", // .color3
      elevation: 10,
      shadowColor: "#287e1c",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 12,
    },
    login_form:{
      width: "100%"
    },
    login_input:{
      backgroundColor: "#0a1f07", // .color4
      marginBottom: 16,
    },
    login_buttom:{
      paddingVertical: 6,
      backgroundColor: "#287e1c", // .color1
      borderRadius: 24,
      marginTop: 8,
      elevation: 4
    },
    login_buttomGeral:{
      paddingVertical: 4,
      marginTop: 12,
      borderRadius: 24,
      borderColor: "#287e1c", // .color1
      borderWidth: 1.5
    },
    login_buttonText:{
      fontWeight: "bold",
      fontSize: 16,
      color: "#FFFFFF",
      textAlign: "center"
    },
    HeaderAR:{
      fontSize: 25,
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