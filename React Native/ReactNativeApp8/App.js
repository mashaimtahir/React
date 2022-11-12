/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Touchable,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={[
              styles.bubbles,
              styles.pinkcolor,
              {
                width: 30,
                height: 30,
                top: 70,
                zIndex: 1,
                left: '16%',
              },
            ]}
          />
          <View
            style={[
              styles.bubbles,
              styles.pinkcolor,
              {
                width: 20,
                height: 20,
                top: 110,
                zIndex: 1,
                left: '11%',
              },
            ]}
          />
          <View
            style={[
              styles.bubbles,
              {
                width: 15,
                height: 15,
                top: 135,
                zIndex: 1,
                right: '9%',
                borderWidth: 1,
                borderColor: '#ffffff70',
              },
            ]}
          />
          <View
            style={[
              styles.bubbles,
              {
                width: 25,
                height: 25,
                top: 160,
                zIndex: 1,
                right: '11%',
                borderWidth: 1,
                borderColor: '#ffffff70',
              },
            ]}
          />
          <LinearGradient
            colors={['#f780d7', '#aa61f8']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.headbody}
          />
          {/* <Text>Jo</Text> */}
        </View>
        <View style={styles.centerbody}>
          <View
            style={[
              styles.bubbles,
              styles.purplecolor,
              {
                width: 30,
                height: 30,
                elevation: 15,
                right: '10%',
                bottom: '29%',
              },
            ]}
          />
          <View
            style={[
              styles.bubbles,
              styles.purplecolor,
              {
                width: 20,
                height: 20,
                elevation: 10,
                right: '5.3%',
                bottom: '7.5%',
              },
            ]}
          />
          <Text
            style={[
              styles.selfcenter,
              styles.whitecolortext,
              styles.fonttitle1,
            ]}>
            Jenifar Scott
          </Text>
          <View
            style={[styles.row, {paddingBottom: 10, justifyContent: 'center'}]}>
            {/* <Icon name={'location-pin'} /> */}
            <Text style={[styles.whitecolortext, styles.fonttitle2]}>
              Location
            </Text>
          </View>
          <View style={[styles.row]}>
            <View style={styles.column}>
              <Text
                style={[
                  styles.selfcenter,
                  styles.pinkcolortext,
                  styles.fonthead1,
                ]}>
                25K
              </Text>
              <Text
                style={[
                  styles.selfcenter,
                  styles.pinkcolortext,
                  styles.fonthead2,
                ]}>
                Followers
              </Text>
            </View>
            <View style={styles.image} />
            <View style={styles.column}>
              <Text
                style={[
                  styles.selfcenter,
                  styles.purplecolortext,
                  styles.fonthead1,
                ]}>
                55K
              </Text>
              <Text
                style={[
                  styles.selfcenter,
                  styles.purplecolortext,
                  styles.fonthead2,
                ]}>
                Following
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'blue',
              zIndex: 1,
              position: 'absolute',
              elevation: 80,
            }}
          />
          <View
            style={[
              styles.bubbles,
              {
                width: 80,
                height: 80,
                // zIndex: 1,
                top: 330,
                left: '30.6%',
                // backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'purple',
              },
            ]}
          />
          <View
            style={[
              styles.bubbles,
              {
                width: 39,
                height: 39,
                // zIndex: 1,
                top: 420,
                left: '42%',
                // backgroundColor: 'green',
                borderWidth: 1,
                borderColor: 'purple',
              },
            ]}
          />
          <View style={[styles.miniBox]}>
            <View style={styles.circlemenu}>
              <Text style={styles.menuitem1}>Hi</Text>
              <Text style={styles.menuitem2}>Hi</Text>
              <Text style={styles.menuitem3}>Hi</Text>
              {/* <Touchable></Touchable>
              <Touchable></Touchable>
              <Touchable></Touchable> */}
            </View>
            <View style={styles.dataBox}>
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.line} />
              <View style={[styles.row, styles.singleBox]}>
                {/* <Icon name={'folder'} size={40} /> */}
                <Text
                  style={[
                    styles.leading,
                    styles.fonthead2,
                    styles.pinkcolortextlight,
                  ]}>
                  Hi
                </Text>
                <View style={[styles.row, styles.singleBoxchild]}>
                  <View style={[styles.row, styles.leading]}>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      Shots
                    </Text>
                  </View>
                  <View style={[styles.row, styles.tailing]}>
                    <Text
                      style={[
                        styles.fonthead2,
                        styles.pinkcolortextlight,
                        styles.padding,
                      ]}>
                      66
                    </Text>
                    <Text style={[styles.fonthead2, styles.pinkcolortextlight]}>
                      {'>'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headbody: {
    width: '20%',
    height: 80,
    // borderRadius: 100,
    top: -130,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignSelf: 'center',
    position: 'absolute',
    transform: [{scaleX: 9}, {scaleY: 5.6}, {translateY: 16.5}],
  },
  image: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 15,
    zIndex: 10,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  selfcenter: {
    alignSelf: 'center',
  },
  centerbody: {
    top: 128,
  },
  pinkcolor: {
    backgroundColor: '#f780d7',
  },
  purplecolor: {
    backgroundColor: '#aa61f8',
  },
  pinkcolortext: {
    color: '#f780d7',
    fontWeight: 'bold',
  },
  pinkcolortextlight: {
    color: '#f780d7',
    fontWeight: '600',
  },
  whitecolortext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  purplecolortext: {
    color: '#aa61f8',
    fontWeight: 'bold',
  },
  fonttitle1: {
    fontSize: 26,
  },
  fonttitle2: {
    fontSize: 22,
  },
  fonthead1: {
    fontSize: 20,
  },
  fonthead2: {
    fontSize: 19,
  },
  padding: {
    paddingHorizontal: 6,
  },
  bottomBox: {
    width: '240%',
    height: 965,
    overflow: 'hidden',
    // borderRadius: 100,
    // backgroundColor: 'red',
    borderTopLeftRadius: 900,
    borderTopRightRadius: 900,
    alignSelf: 'center',
    // position: 'absolute',
    marginTop: 90,
    transform: [{translateY: 16.5}],
  },
  miniBox: {
    width: '35%',
    height: 430,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 15,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  circlemenu: {
    alignSelf: 'center',
    // position: 'absolute',
    backgroundColor: 'white',
    width: 220,
    height: 210,
    top: -135,
    borderRadius: 220,
    elevation: 20,
  },
  menuitem1: {
    position: 'absolute',
    color: 'black',
    fontSize: 30,
    left: 39,
    bottom: 30,
  },
  menuitem2: {
    position: 'absolute',
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
    bottom: 10,
  },
  menuitem3: {
    position: 'absolute',
    color: 'black',
    fontSize: 30,
    right: 39,
    bottom: 30,
  },
  dataBox: {
    // flex: 1,
    top: -120,
    zIndex: -1,
    padding: 2,
    backgroundColor: 'white',
  },
  singleBox: {
    padding: 5,
    // backgroundColor: 'blue',
  },
  singleBoxchild: {
    padding: 5,
    // backgroundColor: 'red',
    flex: 1,
    // borderBottomWidth: 1,
  },
  leading: {
    padding: 1,
  },
  tailing: {
    // backgroundColor: 'green',
    flex: 1,
    justifyContent: 'flex-end',
    // padding: 4,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#00000099',
    // justifyContent: 'flex-end',
    marginRight: -3,
    alignSelf: 'flex-end',
  },
  bubbles: {
    borderRadius: 200,
    position: 'absolute',
  },
});

export default App;
