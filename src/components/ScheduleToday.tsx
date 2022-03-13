import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';
import { notesTimeLine } from '../data/notesTimeLine';

interface Props{
    hour:string
}

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

  const TimeZone =({hour}:Props)=>{
      return(
          <>
           {notesTimeLine[0].notes.map((note,index) => {
                    if (
                      hour === note.hourInit ||
                      (hour >= note.hourInit && hour <= note.hourEnd)
                    ) {
                      return (
                        <View key={index}
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
      )
  }

  const RenderSchedule = () => {
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


  return (
    <View style={{height: hp(40)}}>
      <Text style={{marginBottom: hp(1),fontWeight:'bold',color:colors.black,fontSize:fz(2)}}>ScheduleToday</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <RenderSchedule />
        </View>
      </ScrollView>
    </View>
  );
};

export default ScheduleToday;

const styles = StyleSheet.create({});
