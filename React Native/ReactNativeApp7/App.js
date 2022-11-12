/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <ScrollView>
      <View style={[styles.bg, {flex: 1}]}>
        <ImageBackground
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg/1200px-Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg',
          }}
          style={{height: 230}}
          resizeMode="cover">
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon name={'arrowleft'} size={30} color={'white'} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Profile Company
              </Text>
            </View>
          </View>
          <View style={styles.ovalBgH}>
            <View style={styles.ovalBg} />
          </View>
          <View style={[styles.ovalBgH2]}>
            <View style={styles.ovalBg2} />
          </View>
          <View style={styles.circle_image} />
          {/* <View style={[styles.ovalBgH3]}>
            <View style={styles.ovalBg3} />
          </View> */}
        </ImageBackground>
        <View
          style={[styles.bg, { flex: 1, marginTop: '3.35%', padding: 30, paddingTop: 0, flexDirection: 'column'}]}>
          <View>
            <Text style={styles.head1}>Company Name</Text>
            <Text style={styles.head2}>J&J Systematic Machine Co.</Text>
          </View>
          <View>
            <Text style={styles.head1}>Company Registration No</Text>
            <Text style={styles.head2}>CUIN 0020102</Text>
          </View>
          <View>
            <Text style={styles.head1}>Company Address</Text>
            <ModalDropdown
              options={['Address', 'Address', 'Address']}
              defaultIndex={0}
              defaultValue={'Address'}
            />
          </View>
          <View>
            <Text style={styles.head1}>Company Contact No</Text>
            <Text style={styles.head2}>CUIN 0020102</Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AwesomeIcon name="circle" />
              <Text style={styles.head1}>
                Does your company supplies machinaries/equipment?
              </Text>
            </View>
            <Text style={styles.head2}>CUIN 0020102</Text>
          </View>
          <View>
            <Text style={styles.head1}>Position</Text>
            <Text style={styles.head2}>Supervisor</Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={[styles.btn, {borderWidth: 1}]}>
              <Text style={{fontSize: 18}}>Edit</Text>
            </TouchableOpacity>
            <LinearGradient colors={['white', 'white']} style={styles.btn}>
              <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize: 18}}>Save Changes</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ovalBgH: {
    overflow: 'hidden',
    width: '17%',
    height: '38%',
    position: 'absolute',
    borderTopLeftRadius: Dimensions.get('window').width * 2,
    borderTopRightRadius: Dimensions.get('window').width * 2,
    // borderTopWidth: 40,
    // borderColor: 'red',
    right: '39.7%',
    bottom: -76,
    backgroundColor: 'transparent',
    transform: [{scaleX: 7.45}, {scaleY: 3.3}],
  },
  ovalBgH2: {
    overflow: 'hidden',
    width: '15.6%',
    height: '39.9%',
    position: 'absolute',
    borderTopLeftRadius: Dimensions.get('window').width * 2.53,
    borderTopRightRadius: Dimensions.get('window').width * 2,
    // borderTopWidth: 40,
    // borderColor: 'red',
    right: '35%',
    bottom: -94,
    backgroundColor: 'red',
    transform: [
      {rotate: '3.3deg'},
      {translateX: -20},
      {translateY: -3.5},
      {scaleX: 7.4},
      {scaleY: 3.4},
    ],
  },
  ovalBgH3: {
    overflow: 'hidden',
    width: 10,
    height: 10,
    position: 'absolute',
    justifyContent: 'center',
    // borderRadius: 100,
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 100,
    // borderBottomStartRadius: 140,
    // borderBottomEndRadius: 10,
    // // borderTopLeftRadius: Dimensions.get('window').width * 2.3,
    // borderTopRightRadius: Dimensions.get('window').width * 2,
    // borderTopWidth: 40,
    // borderColor: 'blue',
    right: '35%',
    bottom: 0,
    backgroundColor: 'blue',
    transform: [
      {rotate: '-66deg'},
      {translateX: -10},
      {translateY: -90},
      {scaleX: 10},
      {scaleY: 10},
      // {skewX: '30deg'},
      // {skewY: '20deg'},
    ],
  },
  // ovalBgH2: {
  //   overflow: 'hidden',
  //   width: '100%',
  //   height: 150,
  //   position: 'absolute',
  //   borderTopLeftRadius: 125,
  //   borderTopRightRadius: 125,
  //   right: '25%',
  //   bottom: -80,
  //   backgroundColor: 'transparent',
  //   transform: [{scaleX: 2.1}],
  // },
  bg: {
    backgroundColor: 'white',
  },
  ovalBg: {
    backgroundColor: 'lightblue',
    width: '50%',
    height: 80,
    transform: [{scaleX: 1}],
  },
  ovalBg2: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    transform: [{scaleX: 10}],
  },
  ovalBg3: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '80%',
    height: '80%',
    borderTopEndRadius: 40,
    borderBottomStartRadius: 40,
    transform: [{scaleX: 1.07},{scaleY: 1.3}],
  },
  circle_image: {
    borderRadius: 100,
    bottom: 52,
    alignSelf: 'center',
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  head1: {
    color: 'black',
    fontSize: 16,
    margin: 3,
    marginTop: 10,
  },
  head2: {
    color: 'black',
    fontSize: 18,
  },
  btn: {
    width: 140,
    height: 50,
    margin: 10,
    marginTop: 23,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
