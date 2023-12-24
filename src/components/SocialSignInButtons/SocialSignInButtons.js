import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebook =() =>{
        console.warn("onSignInFacebook");
      }
      const onSignInGoogle =() =>{
        console.warn("onSignInGoogle");
      }
      const onSignInApple =() =>{
        console.warn("onSignInApple");
      }
  return (
    <>
      <CustomButton 
      text="Sign In with Facebook" 
      onPress={onSignInFacebook}
      bgColor="#fff"
      fgColor="#1E90FF"
      />
    <CustomButton 
      text="Sign In with Google" 
      onPress={onSignInGoogle}  
      bgColor="#fff"
      fgColor="#DD4D44"
      />
    <CustomButton 
      text="Sign In with Apple" 
      onPress={onSignInApple}  
      bgColor="#fff"
      fgColor="#363636"
      />
    
    </>
  )
}

export default SocialSignInButtons