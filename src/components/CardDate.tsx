import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const dayDate = [
  {
    day: 22,
    initial: 'Fr',
  },
  {
    day: 23,
    initial: 'Sa',
  },
  {
    day: 24,
    initial: 'Su',
  },
  {
    day: 'Other',
    initial: 'Date',
  },
];
interface Props {
  isActiveCard: {day: Number};
  setIsActiveCard: Function;
}
const CardDate = ({setIsActiveCard, isActiveCard}: Props) => {
  const {hp, wp, fz} = responsiveSize;
  
  return (
    <View style={{marginTop: hp(1.5)}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        data={dayDate}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIsActiveCard({
                  ...isActiveCard,
                  day: item.day,
                });
              }}
              style={{
                backgroundColor:
                  isActiveCard.day === item.day ? colors.purple : '#F1F5F9',
                borderRadius: wp(2),
                height: hp(18),
                width: wp(20),
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      isActiveCard.day === item.day ? 'white' : colors.black,
                    fontSize: fz(2.3),
                    fontWeight: 'bold',
                  }}>
                  {item.day}
                </Text>
                <Text
                  style={{
                    color:
                      isActiveCard.day === item.day ? 'white' : colors.black,
                    marginTop: hp(0.5),
                  }}>
                  {item.initial}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CardDate;

const styles = StyleSheet.create({});
