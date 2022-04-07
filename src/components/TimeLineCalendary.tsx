import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsiveSize} from '../themes/themePrincipal';
import RenderDays from './RenderDays';

interface calendaryDaysProps {
  day: string;
  name: string[];
}
const TimeLineCalendary = () => {
  const [calendaryDays, setCalendaryDays] = useState<calendaryDaysProps[]>([]);

  const weekLabel=(current: any)=> {
    const week = [];

    if (current.getDay() == 0) {
      //En los casos en que es domingo, restar como si fuera septimo dia y no cero
      current.setDate(current.getDate() - 7 + 1);
    } else {
      current.setDate(current.getDate() - current.getDay() + 1);
    }

    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    week.forEach(w => {
      let nameDays = w.toString().split(' ', 1);
      let days = w.toLocaleString('es-Es', {
        day: '2-digit',
      });
      setCalendaryDays(calendaryDays => [
        ...calendaryDays,
        {day: days, name: nameDays},
      ]);
    });
  }

  useEffect(() => {
    weekLabel(new Date());
  }, []);

  
  return (
    <View style={{flexDirection: 'row'}}>
      <RenderDays  calendary={calendaryDays}/>
    </View>
  );
};

export default TimeLineCalendary;

const styles = StyleSheet.create({});
