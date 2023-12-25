import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/image/bgr.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'




const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {height} = useWindowDimensions();

  const navigation = useNavigation();


  const onSignInPressed =() =>{
    console.warn("Xử lí dữ liệu ");
  
  }
  const onForgotPasswordPressed =() =>{
    navigation.navigate('InputEmailComfirm')
  }
  const onSignUpPressed =() =>{
    navigation.navigate('SignUp')
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View  style={styles.root}>
      <Image 
      source={Logo}
      style={[styles.logo , {height: height*0.3}]}
      resizeMode='containe'
      ></Image>

    <CustomInput 
      placeholder="Tài khoản" 
      value={username} 
      setValue={setUsername}
    />
    <CustomInput 
      placeholder="Mật khẩu" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
    /> 
    <CustomButton text="Đăng nhập " onPress={onSignInPressed}  />
    { <CustomButton
      text="Quên mật khẩu?" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY"
    /> }

    <CustomButton
      text="Bạn chưa có tài khoản? Đăng ký" 
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
    flex: 1,
    // backgroundColor: '#AFEEEE',
  },
  logo:{
    marginTop: 60,
    width: '80%',
    maxWidth: 400,
    maxHeight: 300,
    borderRadius: 25,
    marginBottom: 20,

  },
});

export default LoginScreen