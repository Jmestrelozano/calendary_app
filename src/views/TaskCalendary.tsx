import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, responsiveSize} from '../themes/themePrincipal';
import CardDate from '../components/CardDate';
import TimeZone from '../components/TimeZone';
import Category from '../components/Category';
import Note from '../components/Note';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface TaskCalendaryProps extends NativeStackScreenProps<any, any>{}

const TaskCalendary = ({navigation}:TaskCalendaryProps) => {
  const {hp, wp, fz} = responsiveSize;
  const [isActiveCard, setIsActiveCard] = useState({
    day: 0,
  });
  const [timeHourFrom, setTimeHourFrom] = useState('');
  const [timeHourTo, setTimeHourTo] = useState('');
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          alignSelf: 'flex-end',
          zIndex:1
        }}>
        <View>
          <Image source={require('../assets/gradient.png')} />
        </View>
      </View>

      <View style={{flex: 1, paddingVertical: hp(5)}}>
        <ScrollView nestedScrollEnabled>
          <View style={{marginHorizontal: wp(4), marginBottom: hp(3.5)}}>
            <Text
              style={{
                width: wp('45%'),
                color: colors.black,
                fontSize: fz(3),
                fontWeight: 'bold',
              }}>
              Let's set the schedule easily
            </Text>
          </View>

          <View style={{marginHorizontal: wp(4), marginTop: hp(2.5)}}>
            <Text style={{color: colors.black, fontSize: fz(2)}}>
              Select the date
            </Text>

            <CardDate
              setIsActiveCard={setIsActiveCard}
              isActiveCard={isActiveCard}
            />
          </View>

          <View style={{marginHorizontal: wp(4), marginTop: hp(4)}}>
            <Text style={{color: colors.black, fontSize: fz(2)}}>
              Select time
            </Text>

            <TimeZone
              setTimeHourFrom={setTimeHourFrom}
              setTimeHourTo={setTimeHourTo}
              timeHourFrom={timeHourFrom}
              timeHourTo={timeHourTo}
            />
          </View>

          <View style={{marginHorizontal: wp(4), marginTop: hp(4)}}>
            <Text style={{color: colors.black, fontSize: fz(2)}}>Category</Text>

            <Category />
          </View>

          <View style={{marginHorizontal: wp(4), marginTop: hp(4)}}>
            <Text style={{color: colors.black, fontSize: fz(2)}}>Note</Text>

            <Note />
          </View>

          <View style={{marginHorizontal: wp(4), marginTop: hp(4)}}>
            <TouchableOpacity
              onPress={()=>navigation.goBack()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(3),
              }}>
              <LinearGradient
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: wp(95),
                  height: hp(9),
                  borderRadius: wp(10),
                }}
                colors={['#DE496E', '#FF6E91']}>
                <Text
                  style={{color: 'white', fontWeight: '600', fontSize: fz(3)}}>
                  Save
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default TaskCalendary;

const styles = StyleSheet.create({});
