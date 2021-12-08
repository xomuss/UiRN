import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Button, TextInput, View, Image} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  //---render methods---

  const Logo = () => {
    return (
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={require('../essets/2560px-React-icon.svg.png')}
        />
      </View>
    );
  };

  const EmailPasswordInput = () => {
    return (
      <View style={styles.inputContainer}>
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
    );
  };

  const LoginButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Log In" />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <Logo />
      <EmailPasswordInput />
      <LoginButton />
    </SafeAreaView>
  );
};

export default LoginScreen;
