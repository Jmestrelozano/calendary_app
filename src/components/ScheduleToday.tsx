import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';
import {notesTimeLine} from '../data/notesTimeLine';
import RenderSchedule from './RenderSchedule';

const ScheduleToday = () => {
  const {fz, wp, hp} = responsiveSize;
  const [arrHours, setArrHours] = useState<string[]>([]);

  const getHours = () => {
    for (let i = 1; i <= 24; i++) {
      if (i >= 12 && i <= 23) {
        setArrHours(arrHours => [...arrHours, `${i}:00`]);
      } else {
        if (i === 24) {
          setArrHours(arrHours => [...arrHours, `00:00`]);
        } else {
          if (i > 9) {
            setArrHours(arrHours => [...arrHours, `${i}:00`]);
          } else {
            setArrHours(arrHours => [...arrHours, `0${i}:00`]);
          }
        }
      }
    }
  };

  useEffect(() => {
    getHours();
  }, []);

  return (
    <View style={{height: hp(40)}}>
      <Text
        style={{
          marginBottom: hp(1),
          fontWeight: 'bold',
          color: colors.black,
          fontSize: fz(2),
        }}>
        ScheduleToday
      </Text>

      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View>
          <RenderSchedule arrHours={arrHours} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ScheduleToday;

const styles = StyleSheet.create({});
