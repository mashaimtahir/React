import React from 'react';
import {
  View,
  Text,
  Image,
  PixelRatio,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Scale from '../Function/Scale';
import Location from './../Svg/Location';
import Bookmark from '../Svg/Bookmark';

const EventCard = ({img, date, title, location, bookmark}) => {
  const fontsizedate = useWindowDimensions().width * 0.036;
  const fontsizetitle = useWindowDimensions().width * 0.042;
  const fontsizelocation = useWindowDimensions().width * 0.034;
  const cardsize = Scale(375, 327, 106);
  const imgSize = Scale(375, 79, 92);
  const cardtxtcontainersize = Scale(375, 207.11, 86);
  const locationpinsize = Scale(375, 14, 14);
  console.log(fontsizedate, fontsizetitle);

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    cardcontainer: {
      // width: '100%',
      width: cardsize.WIDTH,
      height: cardsize.HEIGHT,
      padding: 5,
      backgroundColor: 'white',
      borderRadius: 10,
      marginVertical: 5,
    },
    cardtxtcontainer: {
      width: cardtxtcontainersize.WIDTH,
      height: cardtxtcontainersize.height,
      marginLeft: 7,
      padding: 5,
      flex: 1.55,
      justifyContent: location === undefined ? 'center' : 'space-between',
    },
    bookmark: {
      position: 'absolute',
      top: 9,
      right: 9,
    },
    img: {
      // width: 100,
      // height: 100,
      // flex: 0.8,
      width: imgSize.WIDTH,
      height: imgSize.HEIGHT,
      flexShrink: 1,
      borderRadius: 10,
    },
    datetxt: {
      fontSize: fontsizedate,
      // flex: 1,
      color: '#5669FF',
    },
    title: {
      color: 'black',
      fontWeight: '500',
      fontSize: fontsizetitle,
    },
    locationtxt: {
      fontSize: fontsizelocation,
    },
  });

  return (
    <View style={[styles.cardcontainer, styles.row]}>
      <Image
        style={styles.img}
        source={{
          uri: img,
        }}
      />
      <View style={styles.cardtxtcontainer}>
        <Text style={styles.datetxt}>{date}</Text>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        {location !== undefined ? (
          <Text numberOfLines={1} style={styles.locationtxt}>
            <Location
              width={locationpinsize.WIDTH}
              height={locationpinsize.HEIGHT}
              color={'#aaa'}
            />
            {' ' + location}
          </Text>
        ) : null}
      </View>
      {bookmark ? (
        <View style={styles.bookmark}>
          <Bookmark color={'#EB5757'} width={15} height={15} />
        </View>
      ) : null}
    </View>
  );
};

export default EventCard;
