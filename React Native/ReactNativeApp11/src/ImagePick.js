import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Imagepicker = ({getValue, geterror}) => {
  const [result, setResult] = useState();
  const imagePicking = async () => {
    const options = {};
    launchImageLibrary(options, response => {
      console.log(response);
      if (response !== undefined) {
        setResult(response.assets[0].uri);
        getValue(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.inputbody}>
      <TouchableOpacity style={styles.submit} onPress={() => imagePicking()}>
        <Text style={styles.submitText}>Select Image</Text>
      </TouchableOpacity>
      {result !== null && result !== undefined ? (
        <>
          <Image
            style={styles.image}
            source={{
              uri: result,
            }}
          />
        </>
      ) : (
        ({
          /* <Text>No image selected</Text> */
        },
        null)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  FormHeading: {
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 27,
  },
  input: {
    borderBottomWidth: 1,
    // marginHorizontal: 15,
  },
  inputbody: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dobtext: {
    fontSize: 18,
    paddingVertical: 5,
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#2001e1',
    paddingVertical: 8,
  },
  submitText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 120,
    height: 120,
  },
});

export default Imagepicker;
