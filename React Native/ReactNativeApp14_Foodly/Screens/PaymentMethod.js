/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import ValidText from '../Abstracts/ValidText';
import Scale from '../Function/Scale';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';
import NoDebit from './../Svg/NoDebit';

const svgSize = Scale(375, 125, 122.5);
const PaymentMethod = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Payment Methods'}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginBottom: svgSize.HEIGHT,
        }}>
        <NoDebit width={svgSize.WIDTH} height={svgSize.HEIGHT} />
        <ValidText
          text={"Don't Have any card :)"}
          style={{
            paddingTop: 10,
            textAlign: 'center',
            fontSize: FontSize.H3,
            color: Colors.black,
          }}
        />
        <ValidText
          text={
            'It’s seems like you don’t add any credit or debit card. You may easily add card.'
          }
          style={{
            marginVertical: FontSize.Caption,
            fontSize: FontSize.Body,
            textAlign: 'center',
          }}
        />
        <Button
          text={'ADD CREDIT CARDS'}
          borderWidth={1}
          borderColor={Colors.green}
          color={Colors.green}
          fontSize={FontSize.Caption}
          paddingVertical={FontSize.Caption}
          style={{
            marginHorizontal: FontSize.Caption,
            marginTop: FontSize.Caption,
          }}
        />
      </View>
    </Container>
  );
};

export default PaymentMethod;
