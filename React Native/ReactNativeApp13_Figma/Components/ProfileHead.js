import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import BackArrow from '../Svg/BackArrow';
import Button from '../Abstract Component/Button';
import MenuDot from '../Svg/MenuDot';
import EditPage from './../Svg/EditPage';
import AddPerson from './../Svg/AddPerson';
import Messege from './../Svg/Messege';
import About from './About';
import ProfileEvents from './ProfileEvent';
import ProfileReview from './ProfileReview';
import TopTabBar from './ProfileTabBar';
import {NavigationContainer} from '@react-navigation/native';
import Scale from '../Function/Scale';

const subtitlefontsize = Dimensions.get('window').width * 0.06;
const fontsize = Dimensions.get('window').width * 0.045;
const fontsize2 = Dimensions.get('window').width * 0.036;
const TopIconSize = Scale(375, 22, 22);
const PImgSize = Scale(375, 96, 96);
const btnSize = Scale(375, 154, 50);
const btniconsize = Scale(375, 22, 22);
const ProfileHead = ({navigation, route, own}) => {
  return (
    <>
      <View style={[styles.statusbar, styles.row]}>
        <Button
          TextIcon={BackArrow}
          width={null}
          texticonsize={TopIconSize.WIDTH}
          onPress={() => navigation.goBack()}
        />
        {own === true ? (
          <Text style={styles.statusbartext}>Profile</Text>
        ) : null}
        {own === false ? (
          <>
            <View style={styles.spacing} />
            <MenuDot
              width={TopIconSize.WIDTH}
              height={TopIconSize.WIDTH}
              color={'black'}
            />
          </>
        ) : null}
      </View>
      <View>
        <View style={styles.center}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            }}
          />
        </View>
        <Text style={[styles.center, styles.title]}>Ashfak Sayem</Text>
        <View style={[styles.center, styles.row]}>
          <View>
            <Text style={[styles.center, styles.subtitle]}>350</Text>
            <Text style={[styles.center, styles.followtxt]}>Following</Text>
          </View>
          <View style={styles.divider} />
          <View>
            <Text style={[styles.center, styles.subtitle]}>346</Text>
            <Text style={[styles.center, styles.followtxt]}>Followers</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.center,
            styles.btncontainer,
            {justifyContent: own === true ? 'center' : 'space-between'},
          ]}>
          {own === true ? (
            <Button
              text={'Edit Profile'}
              borderWidth={1}
              width={'50%'}
              TextIcon={EditPage}
              texticonsize={23}
              color={'#5669FF'}
              borderColor={'#5669FF'}
            />
          ) : null}
          {own === false ? (
            <>
              <Button
                text={'Follow'}
                width={btnSize.WIDTH}
                height={btnSize.HEIGHT}
                TextIcon={AddPerson}
                texticonsize={btniconsize.WIDTH}
                fontSize={fontsize}
                paddingHorizontal={fontsize}
                paddingVertical={0}
                color={'white'}
                backgroundColor={'#5669FF'}
              />
              <Button
                text={'Messages'}
                borderWidth={1}
                width={btnSize.WIDTH}
                height={btnSize.HEIGHT}
                TextIcon={Messege}
                fontSize={fontsize}
                texticonsize={btniconsize.WIDTH}
                color={'#5669FF'}
                paddingVertical={0}
                paddingHorizontal={fontsize}
                borderColor={'#5669FF'}
              />
            </>
          ) : null}
        </View>
      </View>
      <TopTabBar />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  image: {
    width: PImgSize.WIDTH,
    height: PImgSize.HEIGHT,
    borderRadius: 100,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  statusbar: {
    marginBottom: 15,
  },
  statusbartext: {
    flex: 1,
    fontSize: 24,
    paddingHorizontal: 10,
    color: '#000',
  },
  title: {
    fontSize: subtitlefontsize,
    color: '#000',
    fontWeight: '500',
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: fontsize,
    color: '#000',
    fontWeight: '500',
  },
  followtxt: {
    fontSize: fontsize2,
  },
  divider: {
    width: 1,
    height: '70%',
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  btncontainer: {
    width: '100%',
    marginVertical: 20,
  },
});

export default ProfileHead;
