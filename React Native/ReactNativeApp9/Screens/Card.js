import React, {useEffect, useState, useRef, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  // Animated,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import moment from 'moment';

const Card = ({route, navigation}) => {
  // Dimensions.addEventListener();
  console.log(route.params);
  console.log(moment(route.params.dateofissue).format('MMMM Do YYYY'));
  const image = {
    uri: 'https://pngimg.com/uploads/world_map/world_map_PNG28.png',
  };
  const values = route.params;
  return (
    <View>
      {/* <Icon name={'500px'} size={33} /> */}
      <Text style={styles.page}>Registration Card</Text>
      <View style={styles.card}>
        <View style={[styles.row, styles.header]}>
          <View style={styles.row}>
            {/* <Text style={styles.center}>Hi</Text> */}
            <Icon style={styles.center} name={'500px'} />
            <View>
              <Text style={styles.companyname}>Webbook</Text>
              <Text style={styles.tagline}>CREATIVE TAGLINE HERE</Text>
            </View>
          </View>
          <View>
            <Text style={styles.headtitle}>YOUR IDENDITY CARD</Text>
            <Text style={[styles.wrap, styles.headinfo]}>{values.address}</Text>
            <Text style={[styles.wrap, styles.headinfo]}>
              Ph: {values.number} | Email : {values.email}
            </Text>
          </View>
        </View>
        <ImageBackground source={image}>
          <View style={[styles.row]}>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: values.image,
                }}
              />
              <Image
                style={styles.barcode}
                source={{
                  uri: 'https://www.labelsandlabeling.com/sites/labels/lnl/files/Books/figure_1.1_-_barcodes_-_a_pattern_of_black_and_white_lines.png',
                }}
              />
            </View>
            <View style={{flex: 1, paddingVertical: 15}}>
              <View style={[styles.row, {flex: 1, flexGrow: 1}]}>
                <View style={{flex: 1}}>
                  <Text style={styles.info}>{values.id}</Text>
                  <Text style={styles.head}>EMPLOYEE ID</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.info}>
                    {moment(values.dateofissue).format('MMMM Do YYYY')}
                  </Text>
                  <Text style={styles.head}>DATE OF ISSUED</Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{fontSize: 18, color: '#6973c8', fontWeight: 'bold'}}>
                  {values.name}
                </Text>
                <Text style={styles.head}>Name</Text>
              </View>
              <View style={[styles.row, {flex: 1, flexGrow: 1}]}>
                <View style={{flex: 1}}>
                  <Text style={styles.info}>
                    {moment(values.dateofbirth).format('MMMM Do YYYY')}
                  </Text>
                  <Text style={styles.head}>DOB</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.info}>{values.nationality}</Text>
                  <Text style={styles.head}>NATIONALITY</Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text style={[styles.info, {marginRight: 100}]}>
                  {values.address}
                </Text>
                <Text style={styles.head}>ADDRESS</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View>
          <View style={styles.bottombar} />
          <View style={[styles.row, styles.bottomshape]}>
            <View style={styles.trapezoid} />
            <View style={[styles.bottombody, {justifyContent: 'center'}]}>
              <Text style={styles.center}>Company</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignSelf: 'center',
    fontSize: 24,
    marginVertical: 12,
  },
  card: {},
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
  header: {
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    paddingVertical: 12,
    backgroundColor: '#6973c8',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  companyname: {
    fontSize: 20,
  },
  tagline: {
    fontSize: 7,
  },
  headtitle: {
    fontSize: 12,
  },
  headinfo: {
    fontSize: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').width * 0.28,
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 9,
  },
  barcode: {
    width: Dimensions.get('window').width * 0.27,
    height: Dimensions.get('window').width * 0.1,
    marginHorizontal: 12,
    marginBottom: 13,
  },
  head: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  // cardbody: {
  //   flex: 1,
  //   flexGrow: 1,
  // },
  bottombar: {
    height: 20,
    width: '100%',
    backgroundColor: '#6973c8',
  },
  bottomshape: {
    position: 'absolute',
    bottom: 1,
    right: 0,
  },
  trapezoid: {
    // marginLeft: 50,
    marginTop: 12.1,
    // width: 100,
    height: 20,
    borderTopWidth: 45,
    borderTopColor: 'transparent',
    borderRightWidth: 30,
    borderRightColor: '#6973c8',
    borderStyle: 'solid',
    transform: [{scaleX: 1}],
  },
  bottombody: {
    width: 100,
    height: 60,
    backgroundColor: '#6973c8',
    marginLeft: -1.87,
    borderTopStartRadius: 22.2,
  },
});

export default Card;
