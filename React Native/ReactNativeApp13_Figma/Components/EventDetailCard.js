import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../Abstract Component/Button';
import Scale from '../Function/Scale';

const subtitlefontsize = Dimensions.get('window').width * 0.045;
const fontsize = Dimensions.get('window').width * 0.036;
const IconSize = Scale(375, 48, 48);
const BtnSize = Scale(375, 60, 28);
const EventDetailCard = ({
  Icon,
  image_addr,
  title,
  subtitle,
  btnPress,
  btntext,
}) => {
  return (
    <View style={[styles.row, styles.container]}>
      {image_addr !== undefined ? (
        <Image style={styles.img} source={image_addr} />
      ) : (
        <Icon width={IconSize.WIDTH} height={IconSize.HEIGHT} />
      )}
      <View style={styles.textcontainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.spacing} />
      {btnPress !== undefined ? (
        <Button
          text={btntext}
          width={BtnSize.WIDTH}
          height={BtnSize.HEIGHT}
          onPress={btnPress}
          fontSize={fontsize}
          paddingVertical={0}
          paddingHorizontal={0}
          color={'#5669FF'}
          backgroundColor={'#5669FF1a'}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  spacing: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    marginVertical: 10,
  },
  textcontainer: {
    marginLeft: 18,
  },
  title: {
    fontSize: subtitlefontsize,
    color: '#000',
  },
  subtitle: {
    fontSize: fontsize,
  },
  img: {
    width: IconSize.WIDTH,
    height: IconSize.HEIGHT,
    borderRadius: 12,
  },
});

export default EventDetailCard;
