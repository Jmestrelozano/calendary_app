import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';
import LinearGradient from 'react-native-linear-gradient';
import TimeLineCalendary from '../components/TimeLineCalendary';
import ScheduleToday from '../components/ScheduleToday';
import Reminder from '../components/Reminder';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any>{}

const Home = ({navigation}:Props) => {
  const {wp, hp, fz} = responsiveSize;
  return (
    <View style={{flex: 1, paddingVertical: hp(5)}}>
      <ScrollView>
          <View style={{marginHorizontal: wp(4)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:hp(4)}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: colors.black,
                fontSize: fz(3),
                fontWeight: 'bold',
              }}>
              Good Morning,
            </Text>
            <Text
              style={{
                color: colors.black,
                fontSize: fz(2.5),
                fontWeight: 'bold',
              }}>
              Shury
            </Text>
          </View>

          <LinearGradient
            style={{
              borderRadius: wp(10),
              width: wp(15),
              height: hp(7),
              justifyContent: 'center',
            }}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            colors={['#0a94f8', '#c876c9', '#ff6e91']}>
            <View style={{backgroundColor: 'white',width:wp(13.5),alignSelf:'center', borderRadius:wp(10),height:hp(6.5),justifyContent:'center'}}>
              <Image
                style={{
                  width: wp(11.5),
                  height: hp(5.8),
                  borderRadius: wp(25),
                  alignSelf: 'center',
                }}
                resizeMode={'contain'}
                source={require('../assets/imgHome/LOGO.png')}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
      
       <TimeLineCalendary />
       <View style={{marginHorizontal:wp(4),marginTop:hp(3)}}>
            <ScheduleToday />
       </View> 
       <View style={{marginHorizontal:wp(4),marginTop:hp(3)}}>
           <Reminder />
       </View>

       
         <TouchableOpacity onPress={()=> navigation.navigate('TaskCalendary')} style={{justifyContent:'center',alignItems:'center',marginTop:hp(3)}}>
          <LinearGradient style={{justifyContent:'center',alignItems:'center', width:wp(70),height:hp(9),borderRadius:wp(10)}} colors={['#DE496E','#FF6E91']}>
            <Text style={{color:'white',fontWeight:'600',fontSize:fz(2.5)}}>Set schedule</Text>
          </LinearGradient>
        </TouchableOpacity>
       
        
      </ScrollView>
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
