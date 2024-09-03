import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  inputNumber: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    width: '90%',
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default styles;