import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Button from './../Abstract Component/Button';
import Google from '../Svg/google';
import Facebook from './../Svg/Facebook';
import Scale from '../Function/Scale';

const fontSize = Dimensions.get('window').width * 0.052;
const btnSize = Scale(375, 273, 56);
const googleiconsize = Scale(375, 26, 26);
const fbiconsize = Scale(375, 30, 30);
const OtherAuth = () => {
  return (
    <>
      <Text style={[styles.center, styles.text]}>OR</Text>
      <Button
        text={'Login with Google'}
        backgroundColor={'white'}
        height={btnSize.HEIGHT}
        fontSize={fontSize}
        TextIcon={Google}
        texticonsize={googleiconsize.WIDTH}
      />
      <View style={styles.spacing} />
      <Button
        text={'Login with Facebook'}
        backgroundColor={'white'}
        height={btnSize.HEIGHT}
        fontSize={fontSize}
        TextIcon={Facebook}
        texticonsize={fbiconsize.WIDTH}
      />
      <View style={styles.spacing} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: 20,
  },
  middletext: {
    fontSize: 16,
    paddingLeft: 7,
  },
  text: {
    fontSize: fontSize,
    paddingTop: 25,
    paddingBottom: 10,
  },
  spacing: {
    padding: 10,
  },
  center: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default OtherAuth;
