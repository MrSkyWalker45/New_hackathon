import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { useNavigation,useRoute } from '@react-navigation/native';
import { auth } from '../firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon,Card } from 'react-native-elements';
import NavOptions from '../components/NavOptions';
import Location from './Location';

//home screen
const HomeScreen = () => {
    const navigate = useNavigation();
   
 
    const signOut = () => {
        auth.signOut().catch(error => alert(error.message))
        if (signOut) {
            navigate.replace("Login")
        }
    }

    const NavigateProfile = () => {
        navigate.navigate('Profile');
    }
    return (

        <SafeAreaView style={tw.style(' pt-10    flex-1',{backgroundColor:'#0D0D0D'})}>
                <View style={tw`flex-row pb-4 items-center px-2`}>
                <Image source={require('../assets/final2.png')} style={tw`h-20 w-20`}/>
                <View style={tw`flex-1 shadow px-3`}>
                    <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 5 }}>One Stop Destination!</Text>
                    <TouchableOpacity onPress={() => navigate.navigate("Location")}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, paddingLeft: 5 ,color:'white',paddingTop:10}}>
                            Current Location
                            <Ionicons size={20} color="#03C04A" name="ios-chevron-down-sharp" type="antdesign" style={{ paddingLeft: 8 }} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigate.navigate("profile")}>
                    <Icon size={35} name="user" type="antdesign" color="white"/>
                </TouchableOpacity>
            </View>
            {/*Search*/}
            <View style={styles.searchBox}>
                <View style={tw`flex-1 flex-row bg-white p-3 px-4`}>
                    <Icon name="search1" type="antdesign" size={20} style={{ paddingRight: 5 }} />
                    <TextInput placeholder="Search for daily help" autoCorrect={false}  returnKeyType="search" onSubmitEditing={()=>alert("I think enter was pressed")}/>
                </View>
                <TouchableOpacity onPress={() => navigate.navigate("Card")}>
                <Ionicons size={25} name="ios-ellipsis-vertical-sharp" color="#03C04A" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </View>
            {/*Body*/}
            <ScrollView>
                <NavOptions/>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 2,
        paddingBottom: 20,
        marginRight: 2,
        paddingLeft: 5,
        paddingTop:10   
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    }
});
//  