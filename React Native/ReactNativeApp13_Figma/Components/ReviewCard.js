import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Button from '../Abstract Component/Button';
import Stars from './../Svg/Star';
import Scale from '../Function/Scale';

const fontsize = Dimensions.get('window').width * 0.045;
const fontsize2 = Dimensions.get('window').width * 0.036;
const profileimgsize = Scale(375, 34, 34);
const ReviewCard = ({img, date, title, eventoccurance, star}) => {
  return (
    <View style={[styles.cardcontainer, styles.row]}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
      <View style={styles.cardtxtcontainer}>
        <View style={[styles.row, styles.cardtitle]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.datetxt}>{date}</Text>
        </View>
        <View style={styles.row}>
          {(() => {
            let a = [];
            for (let i = 1; i < star; i++) {
              a.push(<Stars />);
            }
            return a;
          })()}
          <Stars />
        </View>
        <Text style={styles.eventoccurance} numberOfLines={2}>
          {eventoccurance}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  btns: {
    justifyContent: 'space-between',
  },
  cardcontainer: {
    width: '100%',
    borderRadius: 10,
    marginVertical: 5,
  },
  cardtitle: {
    justifyContent: 'space-between',
  },
  cardtxtcontainer: {
    marginLeft: 7,
    padding: 5,
    flex: 2.3,
    justifyContent: 'space-evenly',
  },
  img: {
    width: profileimgsize.WIDTH,
    height: profileimgsize.HEIGHT,
    borderRadius: 50,
  },
  datetxt: {
    fontSize: fontsize2,
  },
  title: {
    fontSize: fontsize,
  },
  eventoccurance: {
    fontSize: fontsize2,
  },
});

export default ReviewCard;
