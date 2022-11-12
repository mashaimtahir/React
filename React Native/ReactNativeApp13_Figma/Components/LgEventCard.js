import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {
  ScaledSheet,
  s,
  vs,
  moderateScale,
  mvs,
} from 'react-native-size-matters';
import Scale from '../Function/Scale';
import Bookmark from '../Svg/Bookmark';
import Location from './../Svg/Location';

const textSize = Dimensions.get('window').width;

const LgEventCard = ({img, date, title, location, bookmark}) => {
  const btnSize = useWindowDimensions().width * 0.04;
  const fontdatesize = useWindowDimensions().width * 0.05;
  const lgbtnsize = Scale(375, 237, 255);
  const lgbtnimgsize = Scale(375, 218, 131);
  const avatarsize = Scale(375, 24, 24);
  const avatarcontainersize = Scale(375, 56, 24);
  const locationpinsize = Scale(375, 16, 16);
  const datesize = Scale(375, 45, 46.55);
  const bookmarksize = Scale(375, 30, 30);
  const imgpaddingsize = Scale(375, 10, 10);
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    center: {
      alignSelf: 'center',
    },
    cardcontainer: {
      width: lgbtnsize.WIDTH,
      height: lgbtnsize.HEIGHT,
      paddingTop: imgpaddingsize.WIDTH * 0.9,
      backgroundColor: 'white',
      borderRadius: 10,
      marginVertical: 5,
    },
    cardtxtcontainer: {
      marginLeft: 7,
      padding: 5,
      // flex: 1,
      justifyContent: 'space-evenly',
    },
    bookmark: {
      position: 'absolute',
      width: bookmarksize.WIDTH,
      height: bookmarksize.HEIGHT,
      backgroundColor: '#FFF9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      top: imgpaddingsize.HEIGHT,
      right: imgpaddingsize.WIDTH,
    },
    date: {
      position: 'absolute',
      width: datesize.WIDTH,
      height: datesize.HEIGHT,
      backgroundColor: '#FFF9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      top: 13,
      left: 13,
    },
    datetxtlabel: {
      fontSize: 15,
      fontWeight: '500',
      color: '#EE5757',
      lineHeight: 15,
    },
    datetxtlabel2: {
      fontSize: 15,
      color: '#EE5757',
      lineHeight: 16,
    },
    img: {
      width: lgbtnimgsize.WIDTH,
      height: lgbtnimgsize.HEIGHT,
      // flex: 1,
      alignSelf: 'center',
      borderRadius: 10,
    },
    datetxt: {
      fontSize: 15,
      flex: 1,
      color: '#5669FF',
    },
    title: {
      color: 'black',
      fontWeight: '500',
      fontSize: textSize * 0.05,
    },
    locationtxt: {
      fontSize: textSize * 0.035,
    },
    avatars: {
      width: avatarcontainersize.WIDTH,
      // left: 0,
      justifyContent: 'center',
      // backgroundColor: 'red',
    },
    avatar: {
      width: avatarsize.WIDTH,
      height: avatarsize.HEIGHT,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 25,
    },
    avatarcontainer: {
      borderRadius: 23,
      justifyContent: 'center',
    },
    avatarcontainer1: {},
    avatarcontainer2: {
      left: -avatarsize.WIDTH / 3,
      zIndex: -2,
    },
    avatarcontainer3: {
      left: -(avatarsize.WIDTH * 2) / 3,
      zIndex: -3,
    },
    rowreverse: {
      flexDirection: 'row',
      // alignItems: 'center',
    },
    smimgcontainer: {
      paddingVertical: 12,
    },
    bottomtext: {
      fontSize: btnSize,
    },
    start: {
      alignSelf: 'flex-start',
    },
  });

  return (
    <View style={[styles.cardcontainer]}>
      <View style={[styles.img]}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
        {bookmark !== undefined ? (
          <View style={styles.date}>
            <Text style={styles.datetxtlabel}>10</Text>
            <Text style={styles.datetxtlabel2}>June</Text>
          </View>
        ) : null}
        {bookmark !== undefined ? (
          <View style={styles.bookmark}>
            <Bookmark color={'#EB5757'} width={15} height={15} />
          </View>
        ) : null}
      </View>
      <View style={styles.cardtxtcontainer}>
        <Text numberOfLines={1} style={[styles.title]}>
          {title}
        </Text>
        <View style={[styles.row, styles.smimgcontainer]}>
          <View style={[styles.rowreverse, styles.avatars]}>
            <View style={[styles.avatarcontainer1, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
            <View style={[styles.avatarcontainer2, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
            <View style={[styles.avatarcontainer3, styles.avatarcontainer]}>
              <Image
                style={styles.avatar}
                source={require('./../Assets/istockphoto-1328085467-1024x1024.jpg')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.bottomtext}>+20 Going</Text>
          </View>
        </View>

        <Text numberOfLines={1}>
          <Location
            width={locationpinsize.WIDTH}
            height={locationpinsize.HEIGHT}
          />
          <Text style={styles.locationtxt} numberOfLines={1}>
            {' '}
            {location}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LgEventCard;
