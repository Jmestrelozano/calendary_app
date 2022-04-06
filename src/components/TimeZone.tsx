import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors, responsiveSize} from '../themes/themePrincipal';

interface TimeZoneProps {
  timeHourFrom: string;
  timeHourTo: string;
  setTimeHourFrom: Function;
  setTimeHourTo: Function;
}
const TimeZone = ({
  timeHourFrom,
  setTimeHourFrom,
  timeHourTo,
  setTimeHourTo,
}: TimeZoneProps) => {
  const {hp, wp, fz} = responsiveSize;

  const [isDisplayDate, setShow] = useState({
    isFrom: false,
    isTo: false,
  });

  const {isFrom, isTo} = isDisplayDate;

  return (
    <View style={{marginTop: hp(1.5)}}>
      <View
        style={{
          flex: 1,
          height: hp(14),
          padding: wp(2),
          borderRadius: wp(2),
          backgroundColor: '#F1F5F9',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text style={{color: colors.black}}>From</Text>
            <TouchableOpacity
              onPress={() => setShow({...isDisplayDate, isFrom: !isFrom})}>
              <Text
                style={{
                  color: colors.black,
                  fontWeight: 'bold',
                  fontSize: fz(4),
                }}>
                {timeHourFrom ? timeHourFrom : '12.00'}
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{color: colors.black, fontSize: fz(4), fontWeight: 'bold'}}>
            {'>'}
          </Text>

          <View>
            <Text style={{color: colors.black}}>To</Text>
            <TouchableOpacity
              onPress={() => setShow({...isDisplayDate, isTo: !isTo})}>
              <Text
                style={{
                  color: colors.black,
                  fontWeight: 'bold',
                  fontSize: fz(4),
                }}>
                {timeHourTo ? timeHourTo : '14.00'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isFrom && (
        <DateTimePicker
          testID="dateTimePickerFrom"
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          onChange={(_, date) => {
            const v = date?.toLocaleTimeString('Es-es', {
              hour: 'numeric',
              minute: 'numeric',
            });
            setTimeHourFrom(v);
            console.log(v);
            setShow({...isDisplayDate, isFrom: !isFrom});
          }}
          display="default"
        />
      )}
      {isTo && (
        <DateTimePicker
          testID="dateTimePickerTo"
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          onChange={(_, date) => {
            console.log(date, 'to');
            const v = date?.toLocaleTimeString('Es-es', {
              hour: 'numeric',
              minute: 'numeric',
            });
            setTimeHourTo(v);
            setShow({...isDisplayDate, isTo: !isTo});
          }}
          display="default"
        />
      )}
    </View>
  );
};

export default TimeZone;

const styles = StyleSheet.create({});
