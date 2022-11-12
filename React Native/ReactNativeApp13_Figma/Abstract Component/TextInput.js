import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({
  width,
  height,
  value,
  setValue,
  placeholder,
  elevation,
  onFocus,
  backgroundColor,
  color,
  placeholderTextColor,
  seperator,
  seperatorHeight,
  seperatorColor,
  fontSize,
  paddingVertical,
  paddingHorizontal,
  Leading_icon,
  onPress,
  Tailing_icon,
  leadingcolor,
  LeadingButton,
  TailingButton,
  tailingcolor,
  borderWidth,
  borderColor,
  borderRadius,
  leadingsize,
  tailingsize,
}) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    center: {
      alignSelf: 'center',
    },
    view: {
      width: width ?? '90%',
      paddingVertical: paddingVertical ?? 5,
      paddingHorizontal: paddingHorizontal ?? 7,
      backgroundColor: backgroundColor ?? 'rgba(0, 0)',
      elevation: elevation ?? 0,
      borderRadius: borderRadius ?? 10,
      borderWidth: borderWidth ?? 1,
      borderColor: borderColor ?? '#aaaaaa',
    },
    input: {
      fontSize: fontSize ?? 12,
      flex: 1,
      flexGrow: 1,
      height: height ? height : null,
      color: color ?? 'black',
    },
    seperator: {
      height: seperatorHeight ?? '80%',
      alignSelf: 'center',
      marginHorizontal: 5,
      width: seperator ?? 0,
      backgroundColor: seperatorColor ?? 'black',
    },
    leading: {
      flex: 0.15,
      alignItems: 'center',
    },
    tailing: {
      flex: 0.15,
      alignItems: 'center',
    },
  });
  return (
    <View style={[styles.row, styles.view]}>
      {Leading_icon !== undefined ? (
        LeadingButton !== undefined ? (
          <LeadingButton
            onPress={() => onPress()}
            style={styles.leading}
            width={null}
            TextIcon={Leading_icon}
            texticonsize={leadingsize}
            texticoncolor={leadingcolor}
          />
        ) : (
          <View style={[styles.center, styles.leading]}>
            <Leading_icon
              width={leadingsize}
              height={leadingsize}
              color={leadingcolor}
            />
          </View>
        )
      ) : null}
      {seperator !== undefined ? <View style={styles.seperator} /> : null}
      <TextInput
        style={[styles.input]}
        onFocus={onFocus}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? '#000000af'}
        onChangeText={setValue}
      />
      {Tailing_icon !== undefined ? (
        TailingButton !== undefined ? (
          <TailingButton
            width={null}
            TextIcon={Tailing_icon}
            texticonsize={tailingsize}
            texticoncolor={tailingcolor}
          />
        ) : (
          <View style={[styles.center, styles.leading]}>
            <Tailing_icon
              width={tailingsize}
              height={tailingsize}
              color={tailingcolor}
            />
          </View>
        )
      ) : null}
    </View>
  );
};

export default Input;
