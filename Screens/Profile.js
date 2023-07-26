import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import {getAuth} from 'firebase/auth'; 
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc'
const Profile = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
    <Animatable.View style={tw`flex-1 items-center justify-center`}>
    
    </Animatable.View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})