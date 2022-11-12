import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EventCalender from './../Svg/EventCal';
import ForwardArrow from './../Svg/ForwardArrow';
import Button from '../Abstract Component/Button';

const EmptyEvents = () => {
  const [state, setState] = useState(true);

  return (
    <View style={styles.emptycontainer}>
      <View style={[styles.row, styles.btncontainer]}>
        <Button
          width={null}
          elevation={state === true ? 10 : 0}
          fontSize={16}
          color={state === true ? '#5669FF' : '#9B9B9B'}
          backgroundColor={state === true ? 'white' : 'transparent'}
          borderRadius={30}
          text={'UPCOMING'}
          onPress={() => setState(true)}
        />
        <Button
          width={null}
          elevation={state === false ? 10 : 0}
          fontSize={16}
          color={state === false ? '#5669FF' : '#9B9B9B'}
          backgroundColor={state === false ? 'white' : 'transparent'}
          borderRadius={30}
          text={'PAST EVENTS'}
          onPress={() => setState(false)}
        />
      </View>
      <View style={styles.center}>
        <EventCalender width={200} height={200} />
        <Text>No Upcoming Event</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur</Text>
      </View>
      <Button
        text={'EXPLORE EVENTS'}
        backgroundColor={'#5669FF'}
        color={'white'}
        height={58}
        Tailing_icon={ForwardArrow}
        tailingsize={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    backgroundColor: '#eaeaea',
    borderRadius: 100,
    padding: 4,
  },
  emptycontainer: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
});

export default EmptyEvents;
