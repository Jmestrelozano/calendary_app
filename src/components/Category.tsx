import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsiveSize} from '../themes/themePrincipal';

const category = [
  {
    color: '#F59E0B',
    name: 'Meeting',
  },
  {
    color: '#701A75',
    name: 'Hangout',
  },
  {
    color: '#DC2626',
    name: 'Cooking',
  },
  {
    color: '#1E293B',
    name: 'Other',
  },
  {
    color: '#1A7529',
    name: 'Weekend',
  },
];
const Category = () => {
  const {fz, wp, hp} = responsiveSize;
  return (
    <View style={{marginTop:hp(1)}}>
      <FlatList
        numColumns={3}
        nestedScrollEnabled
        data={category}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: wp('25%'),
                marginRight:wp(3),
                marginTop:hp(1.5),
              }}>
              <View
                style={{
                  backgroundColor: item.color,
                  borderRadius: wp(10),
                  height: hp(3),
                  width: wp(5),
                  marginRight:wp(1)
                  
                }}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
