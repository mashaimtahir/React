import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import BackArrow from '../Svg/BackArrow';
import Search from './../Svg/Search';
import Button from '../Abstract Component/Button';
import MenuDot from '../Svg/MenuDot';
import Scale from '../Function/Scale';

const btnSize = Scale(375, 22, 22);
const btn2Size = Scale(375, 24, 24);
const fontSize = Dimensions.get('window').width * 0.06;
const EventStatus = ({navigation, route}) => {
  return (
    <View style={[styles.statusbar, styles.row]}>
      <Button
        onPress={() => navigation.goBack()}
        TextIcon={BackArrow}
        width={null}
        texticonsize={btnSize.WIDTH}
      />
      <Text style={styles.statusbartext}>Events</Text>
      <Search width={btn2Size.WIDTH} height={btn2Size.HEIGHT} />
      <View style={styles.spacing} />
      <MenuDot width={btnSize.WIDTH} height={btnSize.HEIGHT} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  spacing: {
    padding: 5,
  },
  statusbar: {
    marginBottom: 15,
  },
  statusbartext: {
    flex: 1,
    fontSize: fontSize,
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default EventStatus;
