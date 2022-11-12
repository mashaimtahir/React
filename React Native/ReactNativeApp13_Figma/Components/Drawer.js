import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Notifications from '../Screens/Notification';
import Event from '../Screens/Event';
import Home from '../Screens/Home';
import Profile from './../Svg/ProfileLight';
import Message from './../Svg/Messege';
import Calender from '../Svg/Calender';
import Setting from '../Svg/Setting';
import Bookmark from '../Svg/Bookmark';
import Button from '../Abstract Component/Button';
import Question from './../Svg/Question';
import Messege from './../Svg/Messege';
import SignOut from './../Svg/SignOut';
import Email from '../Svg/Email';
import CalenderNormal from '../Svg/CalenderNormal';
import Crown from '../Svg/Crown';
import Scale from '../Function/Scale';

const profile = Scale(375, 60, 60);
const bottombtnsize = Scale(375, 150, 40);
const fontSize = Dimensions.get('window').width * 0.043;
function CustomDrawerContent(props) {
  const btns = [
    {
      title: 'Profile',
      Icon: Profile,
      onPress: () => props.navigation.navigate('Profile'),
    },
    {
      title: 'Message',
      Icon: Messege,
      onPress: () => {},
    },
    {
      title: 'Calender',
      Icon: CalenderNormal,
      onPress: () => {},
    },
    {
      title: 'Bookmark',
      Icon: Bookmark,
      onPress: () => {},
    },
    {
      title: 'Contact Us',
      Icon: Email,
      onPress: () => {},
    },
    {
      title: 'Settings',
      Icon: Setting,
      onPress: () => {},
    },
    {
      title: 'Helps & FAQs',
      Icon: Question,
      onPress: () => {},
    },
    {
      title: 'Sign Out',
      Icon: SignOut,
      onPress: () => {},
    },
  ];
  const Size = useWindowDimensions().scale * 4 + 4;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.spaceBetween}>
        <View style={styles.drawerWrapper}>
          <View style={styles.wrapper1}>
            <Image
              style={styles.drawerImg}
              source={{
                uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png',
              }}
            />
            <Text style={styles.drawerTitle}>Ashfak Sayem</Text>
          </View>
          {btns.map((btn, key) => {
            return (
              <View style={styles.btn1} key={key}>
                <Button
                  style={{
                    margin: Size * 0.3,
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                  TextIcon={btn.Icon}
                  texticonsize={Size * 1.1 + 6}
                  fontSize={Size * 1.5}
                  justifyContent={'flex-start'}
                  text={btn.title}
                  paddingHorizontal={Size * 1.5}
                  texticoncolor={btn.title === 'Bookmark' ? '#0000' : '#999'}
                  textspacing={20}
                  onPress={btn.onPress}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.upgrade}>
          <Button
            TextIcon={Crown}
            width={bottombtnsize.WIDTH}
            height={bottombtnsize.HEIGHT}
            color={'#00F8FF'}
            textspacing={10}
            fontSize={fontSize}
            paddingVertical={bottombtnsize.HEIGHT / 10}
            paddingHorizontal={bottombtnsize.WIDTH / 10}
            backgroundColor={'#00F8FF2a'}
            text={'Upgrade Pro'}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const Size = useWindowDimensions().scale * 4 + 4;
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: '#0000',
          animation: false,
          drawerStyle: {
            width: Size * 17 + 30,
          },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          screenOptions={{
            animation: false,
          }}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  drawerWrapper: {
    width: '100%',
    paddingLeft: 0,
    paddingVertical: 10,
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
  },
  drawerImg: {
    width: profile.WIDTH,
    height: profile.HEIGHT,
    borderRadius: 90,
  },
  wrapper1: {
    paddingLeft: 30,
  },
  spaceBetween: {
    height: Dimensions.get('window').height - 11,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  upgrade: {
    marginLeft: bottombtnsize.WIDTH / 5,
    width: bottombtnsize.WIDTH + 2,
    paddingBottom: bottombtnsize.HEIGHT / 5,
  },
  btn1: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default MyDrawer;
