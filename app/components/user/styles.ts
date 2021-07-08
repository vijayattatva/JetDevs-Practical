import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: '95%',
    height: 100,
    margin: 10,
    borderRadius: 10,
    borderColor: "#e3e3e3",
    borderWidth: 1,
  },
  userImage: { width: 50, height: 50, borderRadius: 25, marginRight: 5, alignSelf: "center" },
  container: { flexDirection: 'row', height: "100%", marginHorizontal: 15 },
  nameView: { marginStart: 15, flex: 1, alignSelf: "center" },
  gender: { marginTop: 5 },
  favIcon: { height: 30, width: 30, marginTop: 15 }
});
