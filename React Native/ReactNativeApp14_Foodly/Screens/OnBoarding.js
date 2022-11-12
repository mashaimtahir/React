/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import OnBoarding1 from '../Svg/OnBoarding1';
import OnBoarding2 from '../Svg/OnBoarding2';
import {Colors, FontSize} from '../Theme';

const OnBoarding = () => {
  return (
    <Container paddingVertical={FontSize.H1}>
      <PagerView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <OnBoarding1 />
        </View>
        <View style={{alignItems: 'center'}}>
          <OnBoarding2 />
        </View>
      </PagerView>
      <Button
        text={'Get Started'}
        backgroundColor={Colors.green}
        color={Colors.white}
        width={'100%'}
      />
    </Container>
  );
};

export default OnBoarding;
