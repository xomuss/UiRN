import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    width: 200,
    flex: 1,
    justifyContent: 'center',
  },
  logoImg: {
    height: 200,
    width: 200,
  },
});

export default styles;
