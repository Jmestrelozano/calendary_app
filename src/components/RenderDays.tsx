import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';

interface RenderDaysProps {
  calendary: {day: string; name: string[]}[];
}
const RenderDays = ({calendary}: RenderDaysProps) => {
  const {fz, wp, hp} = responsiveSize;
  
  return (
    <>
      {calendary.map(({day, name}) => {
        return (
          <View
            key={day}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              height: hp(10),
              borderRadius: wp(3),
              backgroundColor:
                Number(day) === new Date().getDate()
                  ? '#FFF0F0'
                  : 'transparent',
            }}>
            <Text
              style={{
                color:
                  Number(day) === new Date().getDate()
                    ? '#DE496E'
                    : colors.black,
                fontSize: fz(2.5),
                fontWeight: 'bold',
              }}>
              {day}
            </Text>
            <Text
              style={{
                color:
                  Number(day) === new Date().getDate()
                    ? '#DE496E'
                    : colors.black,
              }}>
              {name[0]}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default RenderDays;

const styles = StyleSheet.create({});
