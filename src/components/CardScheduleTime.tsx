import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveSize } from '../themes/themePrincipal'

const CardScheduleTime = () => {
const {wp,hp,fz} = responsiveSize
  return (
   <> 
    <View  style={{backgroundColor:'#8572FF',padding:hp(1),borderRadius:wp(2.5),marginVertical:hp(2)}}>
        <View style={{flexDirection:'row',}}>
            <View style={{backgroundColor:'#BAB0F9',width:wp(14),height:hp(7),borderRadius:wp(3),justifyContent:'center'}}>
                <Text style={{justifyContent:'center',alignSelf:'center'}}>
                    <Icon color={'white'} size={30} name='calendar-outline'  />
                </Text>
              
            </View>
        
            <View style={{marginLeft:wp(7),justifyContent:'center'}}>
                <Text style={{color:'white'}}>Urus SIM di samsat Klayatan</Text>
                <View style={{flexDirection:'row',marginTop:hp(.7)}}>
                    <Text>
                        <Icon color={'white'} size={20} name='time'  />
                    </Text>
                    <Text style={{color:'white',marginLeft:wp(2)}}>12.00 - 16.00</Text>
                </View>
                
            </View>
        </View>
    </View>

    <View  style={{backgroundColor:'#8572FF',padding:hp(1),borderRadius:wp(2.5)}}>
        <View style={{flexDirection:'row',}}>
            <View style={{backgroundColor:'#BAB0F9',width:wp(14),height:hp(7),borderRadius:wp(3),justifyContent:'center'}}>
                <Text style={{justifyContent:'center',alignSelf:'center'}}>
                    <Icon color={'white'} size={30} name='calendar-outline'  />
                </Text>
              
            </View>
        
            <View style={{marginLeft:wp(7),justifyContent:'center'}}>
                <Text style={{color:'white'}}>Urus SIM di samsat Klayatan</Text>
                <View style={{flexDirection:'row',marginTop:hp(.7)}}>
                    <Text>
                        <Icon color={'white'} size={20} name='time'  />
                    </Text>
                    <Text style={{color:'white',marginLeft:wp(2)}}>12.00 - 16.00</Text>
                </View>
                
            </View>
        </View>
    </View>
    </>
  )
}

export default CardScheduleTime

const styles = StyleSheet.create({})