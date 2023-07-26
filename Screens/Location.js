import { View, Text ,SafeAreaView,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons' ;
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {db} from '../firebase'; 

export default function Location() {
    const navigation = useNavigation(); 
  return (
    <SafeAreaView style={tw.style('flex-1',{backgroundColor:'#0A0A0A'})}>
    <View style={tw`flex-1 bg-gray-900`}>
        <View style={tw.style("p-5 shadow", {backgroundColor:"#03C04A"})}>
            <View>
                <Text style={tw`text-lg font-bold text-center text-black`}>Locations</Text>
            </View>
            <TouchableOpacity
                onPress={navigation.goBack}
                style={tw`rounded-full bg-black absolute top-3 right-5`}>
                <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
        </View>
        <ScrollView style={tw.style('px-4 py-3 my-5 ')}>
            <TouchableOpacity style={tw`flex-row bg-white`}>
            <MaterialIcons name="home-circle" size={40} style={tw`rounded-full pr-2 pb-2`} />
            <Text style={tw`text-lg text-black font-bold pt-1`}>Current Location(Home)</Text>
        </TouchableOpacity>
        </ScrollView>
       </View>
</SafeAreaView>
  )
}