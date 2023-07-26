/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import PagerView from 'react-native-pager-view';
import {FontSize} from '../Theme';
import TopSheet from './TopSheet';

const MainStatusBar = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(0);
  const refPager = useRef();
  return (
    <>
      <View style={[styles.row, styles.container]}>
        <View style={[styles.flex]}>
          <Text style={styles.center}>Delvier to</Text>
          <Text style={styles.center}>San Francisco</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
          <Text style={[styles.filter, styles.spacing]}>Filter</Text>
        </TouchableWithoutFeedback>
      </View>
      <TopSheet check={open} setCheck={setOpen}>
        <View>
          <View>
            <TouchableWithoutFeedback
              onPress={() => refPager.current?.setPage(0)}>
              <Text style={selection === 0 ? {fontWeight: '700'} : {}}>
                Type
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => refPager.current?.setPage(1)}>
              <Text style={selection === 1 ? {fontWeight: '700'} : {}}>
                Sort By
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => refPager.current?.setPage(2)}>
              <Text style={selection === 2 ? {fontWeight: '700'} : {}}>
                Price
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => refPager.current?.setPage(3)}>
              <Text style={selection === 3 ? {fontWeight: '700'} : {}}>
                Dietary
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <PagerView
            ref={refPager}
            initialPage={0}
            onPageSelected={event => {
              setSelection(event.nativeEvent.position);
            }}
            style={{minHeight: 100}}>
            <View key={0}>
              <Text>Filter</Text>
            </View>
            <View key={1}>
              <Text>Filter</Text>
            </View>
            <View key={2}>
              <Text>Filter</Text>
            </View>
            <View key={3}>
              <Text>Filter</Text>
            </View>
          </PagerView>
        </View>
      </TopSheet>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
  },
  spacing: {
    padding: FontSize.Caption * 0.3,
  },
  container: {
    width: '100%',
    paddingVertical: 8,
  },
  justify: {
    justifyContent: 'center',
  },
  filter: {
    position: 'absolute',
    paddingRight: 10,
    right: 0,
    bottom: 0,
  },
});

export default MainStatusBar;
