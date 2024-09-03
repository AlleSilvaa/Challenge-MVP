import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
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
    height: 80, // Aumente a altura para permitir múltiplas linhas
    textAlignVertical: 'top', // Alinhe o texto ao topo
  },
});

export default styles;