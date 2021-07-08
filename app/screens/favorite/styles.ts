import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center"
  },
  input: {
    height: 45,
    borderColor: "#e3e3e3",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 15,
    fontSize: 16
  },
  button: {
    height: 40,
    backgroundColor: "#04637a",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10
  },
  loginText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center"
  }
});
