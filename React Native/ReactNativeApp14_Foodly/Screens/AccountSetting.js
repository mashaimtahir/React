import React, {useState} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Container from '../Abstracts/Container';
import List from '../Modules/List';
import Switch from '../Modules/Switch';
import Alarm from '../Svg/Alarm';
import Profile from '../Svg/Profile';
import {Colors, FontSize} from '../Theme';

const AccountSetting = ({navigation}) => {
  const [state, setState] = useState(false);
  const listItems = [
    {
      Leading: <Profile />,
      text: 'Profile Information',
      description: 'Change your account information',
      onPress: () => navigation.navigate('ProfileSetting'),
    },
    {
      Leading: <Profile />,
      text: 'Change Password',
      description: 'Change your password',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      Leading: <Profile />,
      text: 'Payment Methods',
      description: 'Add your credit & debit cards',
      onPress: () => navigation.navigate('PaymentMethod'),
    },
    {
      Leading: <Profile />,
      text: 'Locations',
      description: 'Add or remove your delivery locations',
      onPress: () => {},
    },
    {
      Leading: <Profile />,
      text: 'Add Social Account',
      description: 'Add Facebook, Twitter etc',
      onPress: () => navigation.navigate('AddSocialAccounts'),
    },
    {
      Leading: <Profile />,
      text: 'Refer to Friends',
      description: 'Get $10 for reffering friends',
      onPress: () => navigation.navigate('ReferFriend'),
    },
  ];
  const listItems2 = [
    {
      Leading: <Profile />,
      text: 'Rate Us',
      description: 'Rate us playstore, appstor',
      onPress: () => {},
    },
    {
      Leading: <Profile />,
      text: 'FAQ',
      description: 'Frequently asked questions',
      onPress: () => {},
    },
    {
      Leading: <Profile />,
      text: 'Logout',
      onPress: () => navigation.navigate('SignIn'),
    },
  ];
  return (
    <Container paddingVertical={0}>
      <ScrollView
        style={{marginTop: StatusBar.currentHeight}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontSize: FontSize.H2,
              color: Colors.black,
              paddingVertical: FontSize.Caption,
            }}>
            Account Settings
          </Text>
          <Text
            style={{fontSize: FontSize.Body, paddingBottom: FontSize.Caption}}>
            Update your settings like notifications, payments, profile edit etc.
          </Text>
          {listItems.map((item, index) => {
            return (
              <List
                key={index}
                borderBottomWidth={index === listItems.length - 1 ? 0 : 1}
                Leading={item.Leading}
                text={item.text}
                description={item.description}
                onPress={item.onPress}
              />
            );
          })}
          <Text
            style={{
              fontSize: FontSize.Body,
              paddingTop: FontSize.Caption * 1.3,
              paddingBottom: FontSize.Caption * 0.3,
            }}>
            NOTIFICATIONS
          </Text>
          <List
            Leading={<Alarm />}
            text={'Profile Information'}
            description={'Change your account information'}
            Svg={<Switch state={state} setState={setState} />}
          />
          <List
            Leading={<Alarm />}
            text={'Profile Information'}
            description={'Change your account information'}
            Svg={<Switch state={state} setState={setState} />}
          />
          <List
            Leading={<Alarm />}
            text={'Profile Information'}
            description={'Change your account information'}
            Svg={<Switch state={state} setState={setState} />}
          />
          <Text
            style={{
              fontSize: FontSize.Body,
              paddingTop: FontSize.Caption * 1.3,
              paddingBottom: FontSize.Caption * 0.3,
            }}>
            MORE
          </Text>
          {listItems2.map((item, index) => {
            return (
              <List
                key={index}
                borderBottomWidth={index === listItems2.length - 1 ? 0 : 1}
                Leading={item.Leading}
                text={item.text}
                description={item.description}
                onPress={item.onPress}
              />
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default AccountSetting;
