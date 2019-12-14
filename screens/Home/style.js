import { StyleSheet } from "react-native";

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
    alignItems: "center",
    textAlign: "center",
    height: 77,
    marginTop: 100,
    width: "100%"
  },
  introTextContainer: {
    alignItems: "center",
    textAlign: "center",
    height: 72,
    marginTop: 100,
    width: "100%"
  },
  introText: {
    fontSize: 16,
    lineHeight: 20, 
    textAlign: "center"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    padding: 10,
  },
  buttonGetStarted: {
    backgroundColor: "#000000",
    borderRadius: 8
  },
  buttonText:{
    textAlign: "center" ,
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'bold',
    width: '100%'
  },
  buttonSignUpContainer: {
    marginTop: 10
  },
  buttonSignUpText: {
    textAlign: "center" ,
    //color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 23,
    fontWeight: 'bold',
    width: '100%'
  }
});

export default styles;


