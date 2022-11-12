import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const subtitlefontsize = Dimensions.get('window').width * 0.054;
const fontsize = Dimensions.get('window').width * 0.04;
const AboutEvent = ({title, description}) => {
  const [length, setlength] = useState(6);
  return (
    <View>
      <Text style={styles.title}>About Event</Text>
      <Text style={styles.description} numberOfLines={length}>
        {description}
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          length > 8 ? setlength(6) : setlength(100);
        }}>
        <Text>{length < 8 ? 'read more' : 'read less'}</Text>
      </TouchableWithoutFeedback>
      <Text>{length < 8 ? '\n\n\n' : '\n'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: subtitlefontsize,
    color: '#000',
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {
    fontSize: fontsize,
    color: '#000',
  },
});

export default AboutEvent;
