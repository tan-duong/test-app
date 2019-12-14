import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    }, 
    welcomeText: {
      fontSize: 32,
      lineHeight: 37,
      fontWeight: 'bold'
    },
    welcomeTextContainer: {
      //alignItems: 'center',
      textAlign: 'center',
      height: 77,
      marginTop: 70,
      width: '100%'
    },
    introTextContainer: {
      //alignItems: 'center',
      textAlign: 'center',
      height: 80,
      marginTop: 15,
      width: '100%'
    },
    introText: {
      fontSize: 16,
      lineHeight: 20,
    },
    buttonRow:{
      position: 'absolute',
      bottom: 0,
      padding: 10,
    },
    buttonNext:{
      backgroundColor: "#000000",
      borderRadius: 8,
      width: '60%'
    },
    buttonText:{
      textAlign: "center" ,
      color: "#FFFFFF",
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 'bold',
      width: '100%'
    },
    buttonBackContainer:{
      width: '30%'
    }
  });

  export default styles



