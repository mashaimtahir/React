import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  delayPressIn,
  style,
  onPress,
  Leading_icon,
  Tailing_icon,
  TextIcon,
  leadingcolor,
  tailingcolor,
  elevation,
  backgroundColor,
  fontSize,
  color,
  text,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  textspacing,
  texticoncolor,
  texticonsize,
  borderColor,
  borderRadius,
  borderWidth,
  leadingsize,
  tailingsize,
  btncardname,
  justifyContent,
}) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    center: {
      alignSelf: 'center',
    },
    left: {
      alignSelf: 'flex-end',
    },
    btn: {
      width: width !== undefined ? width : '90%',
      height: height ?? null,
      elevation: elevation ?? 0,
      opacity: 1,
      paddingVertical:
        paddingVertical !== undefined
          ? paddingVertical
          : text
          ? width
            ? 10
            : 5
          : 2,
      paddingHorizontal:
        paddingHorizontal !== undefined ? paddingHorizontal : text ? 12 : 2,
      justifyContent: justifyContent ?? 'space-evenly',
      borderRadius: borderRadius !== undefined ? borderRadius : 10,
      borderWidth: borderWidth !== undefined ? borderWidth : 0,
      backgroundColor: backgroundColor !== undefined ? backgroundColor : 'none',
      borderColor: borderColor !== undefined ? borderColor : 'none',
    },
    text: {
      color: color ? color : null,
      fontSize: fontSize ? fontSize : 20,
      paddingLeft: textspacing ? textspacing : 0,
    },
    leading: {
      position: 'absolute',
      left: 13,
    },
    tailing: {
      position: 'absolute',
      right: 13,
    },
    texticon: {
      paddingRight: text ? 3 : 0,
    },
  });
  return (
    <>
      <TouchableOpacity
        delayPressIn={delayPressIn}
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.center, style]}>
        <View style={[styles.btn, styles.row]}>
          {Leading_icon !== undefined ? (
            <View style={[styles.center, styles.leading]}>
              <Leading_icon
                width={leadingsize}
                height={leadingsize}
                color={leadingcolor}
              />
            </View>
          ) : null}
          {TextIcon !== undefined ? (
            <View style={[styles.center, styles.texticon]}>
              <TextIcon
                width={texticonsize}
                height={texticonsize}
                color={texticoncolor}
              />
            </View>
          ) : null}
          {text ? (
            <Text style={[styles.center, styles.text]}>{text}</Text>
          ) : null}
          {Tailing_icon !== undefined ? (
            <View style={[styles.center, styles.tailing]}>
              <Tailing_icon
                width={tailingsize}
                height={tailingsize}
                color={tailingcolor}
              />
            </View>
          ) : null}
        </View>
        {btncardname ? (
          <Text style={[styles.center, styles.text]}>{btncardname}</Text>
        ) : undefined}
      </TouchableOpacity>
    </>
  );
};

export default Button;
