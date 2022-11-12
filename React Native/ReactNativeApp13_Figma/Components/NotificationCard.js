import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, Dimensions} from 'react-native';
import Button from '../Abstract Component/Button';
import Scale from '../Function/Scale';

const imgSize = Scale(375, 45, 45);
const btnSize = Scale(375, 95, 36);
const fontSize1 = Dimensions.get('window').width * 0.045;
const fontSize2 = Dimensions.get('window').width * 0.04;
const NotificationCard = ({
  img,
  date,
  title,
  eventoccurance,
  btns,
  setValue,
}) => {
  const fontSizeTitle = fontSize1;
  const fontSizeDate = fontSize2;
  const btnFontSize = useWindowDimensions().scale * 6.5 + 1;
  const fontSizeSubTitle = fontSize2;
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
    cardtxtcontainer: {
      marginLeft: 7,
      padding: 5,
      flex: 2.3,
      justifyContent: 'space-evenly',
    },
    img: {
      width: imgSize.WIDTH,
      height: imgSize.HEIGHT,
      borderRadius: 50,
    },
    datetxt: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: fontSizeDate,
    },
    title: {
      fontSize: fontSizeTitle,
    },
    eventoccurance: {
      fontSize: fontSizeSubTitle,
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
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.eventoccurance}>{eventoccurance}</Text>
        </View>
        {btns === true ? (
          <View style={[styles.row, styles.btns]}>
            <Button
              text={'Reject'}
              width={btnSize.WIDTH}
              height={btnSize.HEIGHT}
              onPress={() => setValue(false)}
              fontSize={btnFontSize}
              paddingHorizontal={20}
              paddingVertical={6}
              borderWidth={1}
              borderColor={'#ddd'}
              backgroundColor={'transparent'}
            />
            <Button
              text={'Accept'}
              onPress={() => setValue(true)}
              width={btnSize.WIDTH}
              height={btnSize.HEIGHT}
              fontSize={btnFontSize}
              paddingHorizontal={20}
              paddingVertical={6}
              backgroundColor={'#5669FF'}
              color={'white'}
            />
          </View>
        ) : null}
      </View>
      <Text style={styles.datetxt}>{date}</Text>
    </View>
  );
};

export default NotificationCard;
