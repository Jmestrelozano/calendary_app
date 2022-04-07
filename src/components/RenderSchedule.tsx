import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TimeZone from './TimeZone';
import {notesTimeLine} from '../data/notesTimeLine';
import {responsiveSize} from '../themes/themePrincipal';
interface RenderScheduleProps {
  arrHours: string[];
}

interface Props {
  hour: string;
}
const RenderSchedule = ({arrHours}: RenderScheduleProps) => {
  const {fz, hp, wp} = responsiveSize;
  const TimeZone = ({hour}: Props) => {
    return (
      <>
        {notesTimeLine[0].notes.map((note, index) => {
          if (
            hour === note.hourInit ||
            (hour >= note.hourInit && hour <= note.hourEnd)
          ) {
            return (
              <View
                key={index}
                style={{
                  borderRadius: wp(5),
                  height: hp(10),
                  padding: wp(4),
                  backgroundColor: '#DE496E',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginRight: wp(3),
                }}>
                <Text style={{color: 'white'}}>{note.note}</Text>
              </View>
            );
          }
        })}
      </>
    );
  };
  return (
    <>
      {arrHours.map((hour, index) => {
        return (
          <View key={index}>
            <View style={{flexDirection: 'row', marginVertical: hp(1.5)}}>
              <Text style={{marginVertical: hp(1.8), marginRight: wp(8)}}>
                {hour}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TimeZone hour={hour} />
              </ScrollView>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default RenderSchedule;

const styles = StyleSheet.create({});
