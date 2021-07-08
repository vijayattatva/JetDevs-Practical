import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../../redux/actions/user-login';
import { styles } from './styles';

const MY_EMAIL = "reactnative@imaginato.com";
const MY_PASSWORD = "imaginato@123";
const LoginScreen = () => {
  const [email, setEmail] = useState(MY_EMAIL);
  const [password, setPassword] = useState(MY_PASSWORD);
  const login = useSelector((state: any) => state.UserLogin);
  const dispatch = useDispatch();

  console.log(login);
  const onEmailTextChange = (value: any) => {
    setEmail(value);
  };

  const onPasswordTextChange = (value: any) => {
    setPassword(value);
  };

  const onLoginPress = () => {
    if (email === MY_EMAIL && password === MY_PASSWORD) {
      dispatch(UserLogin());
    } else {
      Alert.alert("Invalid user");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>{"User Login"}</Text>
        <TextInput
          value={email}
          onChangeText={onEmailTextChange}
          placeholder={"Enter Email"}
          style={styles.input} />
        <TextInput
          value={password}
          onChangeText={onPasswordTextChange}
          placeholder={"Enter Password"}
          style={styles.input} />
        <TouchableOpacity onPress={onLoginPress} style={styles.button}>
          <Text style={styles.loginText}>{"Login"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;