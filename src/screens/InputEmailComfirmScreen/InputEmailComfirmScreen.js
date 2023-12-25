import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'

const InputEmailComfirmScreen = () => {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigation();
  
  const onConfirmPressed =() =>{
    navigate.navigate('ConfirmEmail')
  
  }
  const onSignInPressed =() =>{
    navigate.navigate('SignIn')
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Tìm tài khoản của bạn </Text>

    <CustomInput 
      placeholder="Nhập email tài khoản" value={email} setValue={setEmail}/>
    
    <CustomButton text="Tìm tải khoản" onPress={onConfirmPressed}  />
  
    <CustomButton
      text="Quay lại đăng nhập" 
      onPress={onSignInPressed} 
      type="TERTIARY"
    />
    </View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  root:{
    flex: 1,
    // backgroundColor: '#AFEEEE',
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

export default InputEmailComfirmScreen