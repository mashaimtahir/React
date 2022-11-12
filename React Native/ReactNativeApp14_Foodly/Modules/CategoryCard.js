/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Pager from './Pager';
import Star from './../Svg/Star';
import Clock from './../Svg/Clock';
import Coin from './../Svg/Coin';
import TimerClock from './../Svg/TimerClock';
import {Colors, FontSize} from '../Theme';
import Scale from '../Function/Scale';
import ValidText from './../Abstracts/ValidText';

const starSize = Scale(375, 11.5, 11.5);
const clockSize = Scale(375, 13, 13);
const ratingBoxSize = Scale(375, 36, 20);
const timerClockSize = Scale(375, 13.5, 8);
const CategoryCard = ({
  size,
  image,
  imgSize,
  title,
  Price,
  State,
  State2,
  Food,
  rating,
  ratingstar,
  time,
  cost,
  overlayColor,
  overlayText,
  borderRadius,
  detailInCard,
}) => {
  return (
    <View style={{width: size.WIDTH, height: size.HEIGHT}}>
      {typeof image === 'object' ? (
        <View style={{width: imgSize.WIDTH, height: imgSize.HEIGHT}}>
          <Pager
            images={image}
            containerStyle={{borderRadius: borderRadius ?? 12}}
            max={5}
          />
        </View>
      ) : image !== undefined ? (
        <View
          style={{
            width: imgSize.WIDTH,
            height: imgSize.HEIGHT,
            overflow: 'hidden',
            borderRadius: borderRadius ?? 12,
          }}>
          <ImageBackground
            source={{uri: image}}
            style={{
              width: imgSize.WIDTH,
              height: imgSize.HEIGHT,
            }}>
            <View
              style={[
                {
                  flex: 1,
                  backgroundColor: overlayColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <ValidText text={overlayText} style={styles.overlayText} />
            </View>
            {detailInCard ? (
              <>
                <View style={styles.ImageInCard}>
                  <View style={[styles.row, styles.centeredChild]}>
                    <TimerClock
                      width={timerClockSize.WIDTH}
                      height={timerClockSize.HEIGHT}
                    />
                    <Text style={{color: Colors.white}}>
                      {' ' + time + 'min'}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.row,
                      styles.centeredChild,
                      {paddingVertical: Dimensions.get('window').width * 0.015},
                    ]}>
                    <Coin color={Colors.white} />
                    <Text style={{color: Colors.white}}>{' ' + cost}</Text>
                  </View>
                </View>
                <View style={styles.ratingBox}>
                  <Text style={styles.ratingStar}>{ratingstar}</Text>
                </View>
              </>
            ) : null}
          </ImageBackground>
        </View>
      ) : null}
      <ValidText text={title} style={styles.title} />
      <Text>
        <ValidText text={Price} />
        <ValidText text={State} />
        {State && State2 ? (
          <Text style={styles.textdot}>{' \t\u25cf\t'}</Text>
        ) : null}
        <ValidText text={State2} />
        {Food && State2 ? (
          <Text style={styles.textdot}>{'\t\u25cf\t'}</Text>
        ) : null}
        <ValidText text={Food} />
      </Text>
      {!detailInCard ? (
        <Text style={styles.text}>
          <ValidText text={ratingstar} />
          {ratingstar !== undefined ? (
            <View style={styles.star}>
              <Star width={starSize.WIDTH} height={starSize.HEIGHT} />
            </View>
          ) : null}
          <ValidText text={rating} />
          {rating !== undefined ? <Text>{'+ Ratings \t\t'}</Text> : null}
          {time !== undefined ? (
            <>
              <Clock
                width={clockSize.WIDTH}
                height={clockSize.HEIGHT}
                color={Colors.black + '99'}
              />
              <Text>{' \t' + time + 'min'}</Text>
            </>
          ) : null}
          {cost !== undefined ? (
            <>
              <Text style={styles.textdot}>{'\t\u25CF \t'}</Text>
              <Coin />
              <Text>{' \t' + cost}</Text>
            </>
          ) : null}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.Subhead,
    color: Colors.black,
    fontWeight: '600',
    paddingTop: Dimensions.get('window').width * 0.02,
  },
  subtitle: {
    fontSize: FontSize.Body,
    paddingTop: Dimensions.get('window').width * 0.004,
  },
  text: {
    fontSize: FontSize.Caption,
    color: Colors.black + 'c5',
    paddingLeft: Dimensions.get('window').width * 0.02,
    paddingVertical: Dimensions.get('window').width * 0.01,
  },
  textdot: {
    color: Colors.grey + '88',
  },
  ratingBox: {
    width: ratingBoxSize.WIDTH,
    height: ratingBoxSize.HEIGHT,
    backgroundColor: Colors.green,
    right: Dimensions.get('window').width * 0.04,
    bottom: Dimensions.get('window').width * 0.04,
    position: 'absolute',
    borderRadius: 7,
  },
  ratingStar: {
    color: Colors.white,
    textAlign: 'center',
  },
  star: {
    paddingHorizontal: Dimensions.get('window').width * 0.01,
  },
  centeredChild: {
    alignItems: 'center',
  },
  ImageInCard: {
    left: Dimensions.get('window').width * 0.04,
    bottom: Dimensions.get('window').width * 0.04,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  overlayText: {
    color: Colors.white,
    fontSize: FontSize.Body,
  },
});

export default CategoryCard;
