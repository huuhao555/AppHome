import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  
  
  const onConfirmPressed =() =>{
    console.warn(" onConfirmPressed ");
  
  }
  const onSignInPressed =() =>{
    console.warn("onSignInPressed");
  }
  const onResendPressed =() =>{
    console.warn("onResendPressed");
  }
  const onPrivacyPolicyPressed =() =>{
    console.warn("onPrivacyPolicyPressed");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email</Text>

    <CustomInput 
      placeholder="Enter comfirmation code" value={code} setValue={setCode}/>
    
    <CustomButton text="Confirm" onPress={onConfirmPressed}  />
  
    <CustomButton
      text="Resend code" 
      onPress={onResendPressed} 
      type="SECONDARY"
    />
    <CustomButton
      text="Back to Sign in" 
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

export default ConfirmEmailScreen