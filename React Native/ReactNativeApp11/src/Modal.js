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

var {width, height} = Dimensions.get('window');

const ModalView = ({
  children,
  title,
  description,
  modal,
  setmodal,
  setmodal2,
  state,
  defbtn = true,
  func,
  style,
}) => {
  return (
    <Modal
      style={style}
      animationInTiming={300}
      animationIn={'zoomIn'}
      animationOutTiming={300}
      onBackdropPress={() => setmodal(false)}
      animationOut={'zoomOut'}
      swipeDirection={['down', 'left', 'right']}
      onSwipeComplete={e => {
        console.log(e.swipingDirection);
        if (e.swipingDirection === 'right') {
          let modal_temp_state =
            state[modal[1] + 1] !== undefined ? modal[1] + 1 : 0;
          setmodal([true, modal_temp_state]);
        } else {
          setmodal(false);
          setmodal2 !== undefined ? setmodal2(true) : null;
        }
      }}
      useNativeDriver={true}
      isVisible={modal[0]}
      backdropColor={'#efefee'}
      backdropOpacity={0.5}>
      <View style={styles.modalContainer}>
        {title !== null && title !== undefined ? <Text>{title}</Text> : null}
        {children}
        {description !== null && description !== undefined ? (
          <Text>{description}</Text>
        ) : null}

        {defbtn === true ? (
          setmodal2 !== undefined || func !== undefined ? (
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.flex, styles.modalbtnmargin]}
                onPress={() => {
                  setmodal(false);
                  setmodal2 !== undefined ? setmodal2(true) : null;
                  func !== undefined ? func(true) : null;
                }}>
                <Text style={styles.center}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.flex, styles.modalbtnmargin]}
                onPress={() => {
                  setmodal(false);
                  func !== undefined ? func(false) : null;
                }}>
                <Text style={styles.center}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.flex, styles.modalbtnmargin]}
                onPress={() => setmodal(false)}>
                <Text style={styles.center}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={[styles.modalbtn2margin]}
                onPress={() => setmodal(false)}>
                <Text style={styles.center}>Ok</Text>
              </TouchableOpacity>
            </View>
          )
        ) : null}
      </View>
    </Modal>
  );
};
export default ModalView;

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
  customModal: {
    width: width,
    height: height,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    zIndex: 1,
  },
});
