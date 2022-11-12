import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Scale from '../Function/Scale';
import SignInLogo from '../Svg/SignInLogo';

const fontSize = Dimensions.get('window').width * 0.09;
const logosize = Scale(375, 55, 56);
const SignInHead = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      alignItems: 'center',
    },
    center: {
      alignSelf: 'center',
    },
    text: {
      fontSize: fontSize,
      fontWeight: '500',
    },
  });
  return (
    <View style={[styles.container, styles.center]}>
      <SignInLogo
        style={styles.center}
        width={logosize.WIDTH}
        height={logosize.HEIGHT}
      />
      <Text style={styles.text}>Event Hub</Text>
    </View>
  );
};

export default SignInHead;
