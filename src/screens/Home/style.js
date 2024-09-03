import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#000',
    marginRight: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 10,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default styles;
