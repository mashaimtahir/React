import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import Scale from '../Function/Scale';
import {Colors, FontSize} from '../Theme';

const CardSize = Scale(375, 332, 110);
const ImgSize = Scale(375, 110, 110);
const DetailCard = ({img, title, subtitle, priceRange, price, state}) => {
  return (
    <View style={[styles.card, styles.row]}>
      <Image source={{uri: img}} style={styles.img} />
      <View style={[styles.flex, styles.details, styles.between]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={[styles.row, styles.between]}>
          <View style={[styles.row]}>
            <Text style={styles.caption}>{priceRange}</Text>
            <Text style={styles.caption}>{state && '\t\u25CF\t' + state}</Text>
          </View>
          <Text style={[styles.price, styles.caption]}>
            {'USD ' + (price === 'free' ? 0 : price)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  card: {
    width: CardSize.WIDTH,
    height: CardSize.HEIGHT,
  },
  img: {
    width: ImgSize.WIDTH,
    height: ImgSize.HEIGHT,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  details: {
    color: Colors.black,
    fontWeight: '600',
    paddingLeft: Dimensions.get('window').width * 0.03,
  },
  title: {
    paddingTop: 3,
    fontSize: FontSize.Subhead,
    fontWeight: '500',
    color: Colors.black,
  },
  subtitle: {
    fontSize: FontSize.Body,
    lineHeight: 24,
  },
  price: {
    color: Colors.green,
  },
  caption: {
    fontSize: FontSize.Caption,
  },
});

export default DetailCard;
