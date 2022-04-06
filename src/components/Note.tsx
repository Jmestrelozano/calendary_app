import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {responsiveSize} from '../themes/themePrincipal';
const {fz, wp, hp} = responsiveSize;
const Note = () => {
  return (
    <View style={styles.textAreaContainer}>
      <TextInput
      
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'grey',
    backgroundColor: '#F1F5F9',
    borderRadius: wp(4),
    padding:1,
    marginTop: hp(1.5),
  },
  textArea: {
    height: hp(15),
    justifyContent: 'flex-start',
  },
});
