import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';


const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  
  const onSubnmitPressed =() =>{
    console.warn(" onSubnmitPressed ");
  
  }
  const onSignInPressed =() =>{
    console.warn("onSignInPressed");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

    <CustomInput 
      placeholder="Code" 
      value={code} 
      setValue={setCode}
      />
    <CustomInput 
      placeholder="Enter your new password" 
      value={newPassword} 
      setValue={setNewPassword}
      />
    
    <CustomButton text="Submit" onPress={onSubnmitPressed}  />
 
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

export default NewPasswordScreen