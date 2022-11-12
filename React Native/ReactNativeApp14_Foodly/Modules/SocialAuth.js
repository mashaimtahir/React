/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, View} from 'react-native';
import ValidText from '../Abstracts/ValidText';
import Scale from '../Function/Scale';
import {Colors, FontSize} from '../Theme';
import Button from './../Abstracts/Button';
import Facebook from './../Svg/Facebook';
import Google from './../Svg/Google';

const IconSize = Scale(375, 28, 28);
const SocialAuth = ({description, label = 'Or'}) => {
  return (
    <View>
      <ValidText
        text={description}
        style={{
          width: '100%',
          textAlign: 'center',
          paddingTop: FontSize.H3,
          paddingHorizontal: FontSize.H3,
          fontSize: FontSize.Body,
        }}
      />
      <ValidText
        text={label}
        style={{
          width: '100%',
          textAlign: 'center',
          paddingVertical: FontSize.H3,
          fontSize: FontSize.Body,
        }}
      />
      <Button
        text={'CONNECT WITH FACEBOOK'}
        fontSize={FontSize.Caption}
        Leading_icon={Facebook}
        leadingsize={IconSize.WIDTH}
        backgroundColor={Colors.blue}
        color={Colors.white}
        width={'100%'}
        paddingVertical={FontSize.Caption}
      />
      <Button
        text={'CONNECT WITH GOOGLE'}
        fontSize={FontSize.Caption}
        Leading_icon={Google}
        leadingsize={IconSize.WIDTH}
        backgroundColor={Colors.primaryblue}
        color={Colors.white}
        width={'100%'}
        paddingVertical={FontSize.Caption}
        style={{paddingVertical: Dimensions.get('window').width * 0.02}}
      />
    </View>
  );
};

export default SocialAuth;
