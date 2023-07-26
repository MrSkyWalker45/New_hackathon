import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';
import tw from 'twrnc';
const Chosen = () => {
  const {
    params:{
      choice,
    }
  } = useRoute();
  return (
   <SafeAreaView style={tw`flex-1 items-center justify-center`}>
    <Text>{choice}</Text>
   </SafeAreaView>
  )
}

export default Chosen

const styles = StyleSheet.create({})