import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';


const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  
  
  const onRegisterPressed =() =>{
    console.warn("Please fill in the required information! ");
  
  }
  const onSignInPressed =() =>{
    console.warn("onSignInPressed");
  }
  const onTermsofUsePressed =() =>{
    console.warn("onTermsofUsePressed");
  }
  const onPrivacyPolicyPressed =() =>{
    console.warn("onPrivacyPolicyPressed");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

    <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
    />
    <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
    />
    <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
    />
    <CustomInput 
      placeholder="Repeat Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry={true}
    />
    <CustomButton text="Register" onPress={onRegisterPressed}  />
    <Text style={styles.text}>By registering, you comfirm that you accect our 
      <Text style={styles.link} onPress={onTermsofUsePressed}> Terms of Use </Text>and
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text> 
    </Text>
    <SocialSignInButtons/>
    <CustomButton
      text="Have a accout. Sign in" 
      onPress={onSignInPressed} 
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
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text:{
    color: "black",
    marginVertical: 10,
  },
  link:{
    color: '#FF8C00'
  },
  
});

export default SignUpScreen