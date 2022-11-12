/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import ValidText from '../Abstracts/ValidText';
import Scale from '../Function/Scale';
import {Colors, FontSize} from '../Theme';
import Forward from './../Svg/Forward';

const ArrowSize = Scale(375, 8, 14);
const List = ({
  text,
  description,
  Svg,
  svgColor,
  textStyle,
  descriptionStyle,
  style,
  Leading,
  borderBottomWidth,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingRight: FontSize.Caption * 1,
              paddingLeft: FontSize.Caption * 0.1,
            }}>
            {Leading}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: borderBottomWidth ?? 1,
              borderBottomColor: Colors.grey + '2f',
              paddingVertical: FontSize.Caption,
            }}>
            <View style={{paddingLeft: ArrowSize.WIDTH * 0.2}}>
              <ValidText
                style={[
                  {fontSize: FontSize.Body, color: Colors.black},
                  textStyle,
                ]}
                text={text}
              />
              <ValidText
                style={[{fontSize: FontSize.Button}, descriptionStyle]}
                text={description}
              />
            </View>
            {Svg ? (
              Svg
            ) : Svg === undefined ? (
              <Forward
                color={svgColor ?? 'black'}
                width={ArrowSize.WIDTH}
                height={ArrowSize.HEIGHT}
              />
            ) : null}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default List;
