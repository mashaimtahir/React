import React from 'react';
import {useState, useRef, useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
// import BottomSheet from '@gorhom/bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import ModalView from './src/Components/containerComponent';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView>
      <BottomSheetContainer refRBSheet={refRBSheet} />
      <ModalContainer refRBSheet={refRBSheet} />
    </SafeAreaView>
  );
};

const BottomSheetContainer = ({refRBSheet}) => {
  const [modal3, setmodal3] = useState(false);
  const [state, setState] = useState({
    text: ['Item 1', 'Item 2', 'Item 3'],
    function: [
      () => {
        console.log(0);
        setmodal3(true);
        setInterval(() => setmodal3(false), 1350);
      },
      () => {
        console.log(1);
      },
      () => {
        console.log(2);
      },
    ],
  });
  return (
    <BottomSheet refRBSheet={refRBSheet}>
      <Text>Bottom Sheet</Text>
      <ModalView
        style={{width: '30%', alignSelf: 'center'}}
        modal={modal3}
        setmodal={e => setmodal3(e)}
        defbtn={false}>
        <Text style={styles.center}>Saved</Text>
        <Image
          style={{width: 50, height: 50, alignSelf: 'center'}}
          source={{
            uri: 'https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif',
          }}
        />
      </ModalView>
      {state.text.map((data, key) => {
        return (
          <View key={key}>
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={() => state.function[key]()}>
              <Text>{data}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </BottomSheet>
  );
};

const BottomSheet = ({children, refRBSheet}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, styles.center]}
        onPress={() => refRBSheet.current.open()}>
        <Text>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        // height={600}
        dragFromTopOnly={true}
        // closeOnDragDown={true}
        openDuration={250}
        customStyles={{
          container: {
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            paddingTop: 20,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <ScrollView style={{width: '100%', borderRadius: 111}}>
          {children}
          {/* <Text>Bottom Sheet</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <Text>Close sheet</Text>
          </TouchableOpacity>
          <View style={{height: 600}}>
            <Text>Hi</Text>
          </View>
          <Text>Hi</Text> */}
        </ScrollView>
      </RBSheet>
    </View>
  );
};

const ModalContainer = ({refRBSheet}) => {
  const [modal1, setmodal1] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [modal3, setmodal3] = useState(false);
  const [state1, setState1] = useState(false);
  const [statedata, setStateData] = useState({
    data: ['Item 1', 'Item 2', 'Item 3'],
    checked: 0,
  });
  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, styles.center]}
        onPress={() => setmodal1(true)}>
        <Text>Modal</Text>
      </TouchableOpacity>
      <ModalView
        // title={'New Modal'}
        // description={'You want to proceed or not.'}
        style={{width: '60%', alignSelf: 'center'}}
        modal={modal1}
        defbtn={false}
        setmodal={e => setmodal1(e)}
        setmodal2={e => setmodal2(e)}>
        <View>
          <Text style={styles.center}>Select file type</Text>
          <Text style={[styles.center, {textAlign: 'center'}]}>
            Choose one or multiple points you want to select
          </Text>
          {statedata.data.map((data, key) => {
            return (
              <View key={key}>
                {statedata.checked === key ? (
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 10, height: 10, alignSelf: 'center'}}
                      source={{
                        uri: 'https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-5.png',
                      }}
                    />
                    <Text>{data}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => {
                      setStateData(prevState => {
                        let obj = {...prevState, checked: key};
                        return obj;
                      });
                    }}>
                    <Image
                      style={{width: 10, height: 10, alignSelf: 'center'}}
                      source={{
                        uri: 'https://icon-library.com/images/uncheck-icon/uncheck-icon-24.jpg',
                      }}
                    />
                    <Text>{data}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          <TouchableOpacity
            style={[styles.modalbtnmargin, {backgroundColor: '#4e4eee'}]}
            onPress={() => {
              setmodal1(false);
              setmodal2(true);
            }}>
            <Text style={[styles.center, {color: 'white'}]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
      <ModalView
        style={{width: '70%', alignSelf: 'center'}}
        modal={modal2}
        defbtn={false}
        setmodal={e => setmodal2(e)}>
        <View>
          <Text style={styles.center}>Changed Saved</Text>
          <Text style={styles.center}>
            Selected answer is {statedata.data[statedata.checked]}
          </Text>
          <TouchableOpacity
            style={[
              styles.modalbtnmargin,
              {backgroundColor: '#621ea3dd', paddingVertical: 5},
            ]}
            onPress={() => {
              setmodal2(false);
              // setmodal3(true);
              refRBSheet.current.open();
              setInterval(() => setmodal3(false), 1500);
            }}>
            <Text style={[styles.center, {color: 'white'}]}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.center}
            onPress={() => setmodal2(false)}>
            <Text style={styles.center}>Close</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
      <ModalView
        style={{width: '30%', alignSelf: 'center'}}
        modal={modal3}
        setmodal={e => setmodal3(e)}
        defbtn={false}>
        <Text style={styles.center}>Saved</Text>
        <Image
          style={{width: 50, height: 50, alignSelf: 'center'}}
          source={{
            uri: 'https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif',
          }}
        />
      </ModalView>
      <Text>{state1.toString()}</Text>
    </View>
  );
};

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
  btn: {
    padding: 5,
    backgroundColor: '#999999',
  },
  modalbtnmargin: {
    backgroundColor: '#eeeeee',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 2,
  },
  modalbtn2margin: {
    backgroundColor: '#eeeeee',
    borderRadius: 12,
    marginHorizontal: 3,
    marginVertical: 0,
    paddingVertical: 1,
    paddingHorizontal: 18,
    alignSelf: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default App;
