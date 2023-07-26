import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import * as Animated from 'react-native-animatable';

const NavOptions = () => {
  const navigation = useNavigation();
  return (
      <View style={tw.style('flex-1 items-center justify-center',{alignSelf:'center'})}>
        
        <Animated.View iterationCount={1} delay={180} animation="slideInLeft"
        style={tw`flex-row items-center justify-center flex-1 pt-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Chosen",{choice:"meds"})} style={tw`items-center justify-center flex-row`} >
            <Card containerStyle={styles.Card}>
                <View style={tw`flex-row`}>
                <Image source={require('../assets/whitemed.png')} style={tw`h-30 w-30`} />
              <Card.Title style={tw.style('text-xl text-black text-center pt-2', { fontSize: 18 })}>Daily Help</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs', { fontSize: 12 })}>Daily help 1 </Card.FeaturedSubtitle>
              </View>
            </Card>
            
          </TouchableOpacity>

        </Animated.View>
        <Animated.View iterationCount={1} delay={250} animation="slideInRight"
        style={tw`flex-row items-center justify-center pt-5`}>
          <TouchableOpacity style={tw`pt-5 items-center`} onPress={() => navigation.navigate("Chosen")}>
            <Card containerStyle={styles.Card}>
            <Image source={require('../assets/whiteshirt.png')} style={tw`h-30 w-30`} />

              <Card.Title style={tw.style('font-bold  text-black text-center pt-2', { fontSize: 18 })}>Daily help</Card.Title>
              <Card.FeaturedSubtitle style={tw.style(' text-xs pr-10 text-center px-2', { fontSize: 12,color:'#F5FEFD' })}>Daily help 3</Card.FeaturedSubtitle>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity style={tw`pt-5 items-center`} onPress={() => navigation.navigate("Chosen")}>
            <Card containerStyle={styles.Card}>
            <Image source={require('../assets/whitecart.png')} style={tw`h-30 w-30`} />

              <Card.Title style={tw.style('font-bold  text-black text-center px-2 pt-2', { fontSize: 18 })}>Daily help</Card.Title>
              <Card.FeaturedSubtitle style={tw.style('text-black text-xs pr-10 text-center px-2', { fontSize: 12 })}>Daily help 4</Card.FeaturedSubtitle>
            </Card>
          </TouchableOpacity>
        </Animated.View>
      </View>
  );
};
export default NavOptions;


const styles = StyleSheet.create({
  Card: {
    marginTop: 4,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 40,
    borderColor: "#BDBDBD",
    borderWidth:0.8,
    justifyContent: 'center',
    backgroundColor: '#03C04A',
    height: 150,
    width:Dimensions.get('window').width/1,
    opacity: 1,

  }

})