import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Button, TextInput, StyleSheet, View, Image} from 'react-native';
import Logo from '../essets/Logo.svg';

const LoginScreen = () => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <View
        style={{
          width: 200,
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../essets/2560px-React-icon.svg.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={onChangePassword}
          style={styles.input}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
        <View
          style={{
            backgroundColor: 'red',
            width: '100%',
            height: 50,
            justifyContent: 'center',
          }}>
          <Button title="Log In" />
          {/*<Logo />*/}
        </View>
      </View>
    </SafeAreaView>
  );
};

// eslint-disable-next-line no-undef
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
  button: {
    height: 20,
    flex: 1,
    width: '100%',
  },
});

export default LoginScreen;
