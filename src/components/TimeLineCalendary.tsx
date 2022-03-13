import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors, responsiveSize } from '../themes/themePrincipal';
import { days } from '../data/days';

const TimeLineCalendary = () => {
const {wp,hp,fz} = responsiveSize

  const RenderDays = () => {
    return (
      <>
        {days.map(({day, name}) => {
          return (
            <View key={day} style={{flex:1,alignItems:'center'}}>
              <Text style={{color:colors.black,fontSize:fz(2.5),fontWeight:'bold'}}>{day}</Text>
              <Text>{name}</Text>
            </View>
          );
        })}
      </>
    );
  };
  return (
    <View style={{flexDirection:'row'}}>
      <RenderDays />
    </View>
  );
};

export default TimeLineCalendary;

const styles = StyleSheet.create({});
