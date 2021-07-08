import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  loaderView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});