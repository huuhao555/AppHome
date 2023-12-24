import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';



const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {height} = useWindowDimensions();

  const onSignInPressed =() =>{
    console.warn("Please fill in the required information! ");
  
  }
  const onForgotPasswordPressed =() =>{
    console.warn("onForgotPasswordPressed");
  }
  const onSignUpPressed =() =>{
    console.warn("onSignUpPressed");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image 
      source={Logo}
      style={[styles.logo , {height: height*0.3}]}
      resizeMode='containe'
      ></Image>

    <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
    />
    <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
    />
    <CustomButton text="Sign In" onPress={onSignInPressed}  />
    <CustomButton
      text="Forgot Password?" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY"
    />
    <SocialSignInButtons/>
    <CustomButton
      text="Don't have an account? Create one" 
      onPress={onSignUpPressed} 
      type="TERTIARY"
    />
    </View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo:{
    width: '80%',
    maxWidth: 400,
    maxHeight: 300,
    borderRadius: 25,
    marginBottom: 20,

  },
});

export default SignInScreen