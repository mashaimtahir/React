/* eslint-disable react-native/no-inline-styles */
// import {useForm, Form, Field} from 'react-fluid-form';
// import {observer} from 'mobx-react';
// import Icons from 'react-native-vector-icons/Entypo';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import DatePicker from 'react-native-neat-date-picker';
// import SafeAreaView from 'react-native-safe-area-context';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  // Animated,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';

function RegistrationForm({navigation}) {
  function nextScreen(values) {
    navigation.navigate('card', values);
  }
  return (
    <>
      <SafeAreaView>
        {/* <Icons name={'air'} size={35} /> */}
        <Text style={styles.FormHeading}>Registration Form</Text>
        <MyForm navigator={nextScreen} />
      </SafeAreaView>
    </>
  );
}

const MyForm = ({navigator}) => {
  // Getting values of text input
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [address, setAddress] = useState();
  const [nationality, setNationality] = useState();
  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const [date2, setDate2] = useState();
  const [image, setImage] = useState();
  // Error handling states
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState();
  const [idError, setIdError] = useState();
  const [addressError, setAddressError] = useState();
  const [nationalityError, setNationalityError] = useState();
  const [numberError, setNumberError] = useState();
  const [dateError, setDateError] = useState();
  const [date2Error, setDate2Error] = useState();
  const [imageError, setImageError] = useState();

  // Feilds error handling
  const submit = () => {
    if (name === undefined || name === '') {
      console.log('Error Name');
      setNameError(true);
    } else if (email === undefined || email === '') {
      console.log('Error email');
      setEmailError(true);
    } else if (id === undefined || id === '') {
      console.log('Error id');
      setIdError(true);
    } else if (address === undefined || address === '') {
      console.log('Error Address');
      setAddressError(true);
    } else if (nationality === undefined || nationality === '') {
      console.log('Error nationality');
      setNationalityError(true);
    } else if (date === undefined || date === '') {
      console.log('Error Date');
      setDateError(true);
    } else if (date2 === undefined || date2 === '') {
      console.log('Error Date2');
      setDate2Error(true);
    } else if (number === undefined || number === '') {
      console.log('Errornumber');
      setNumberError(true);
    } else if (image === undefined || image === '') {
      console.log('Error image');
      setImageError(true);
    } else {
      console.log('Navigation');
      setNameError(false);
      setEmailError(false);
      setIdError(false);
      setAddressError(false);
      setNationalityError(false);
      setNumberError(false);
      navigator({
        'name': name,
        'email': email,
        'id': id,
        'address': address,
        'nationality': nationality,
        'number': number,
        'dateofbirth': date,
        'dateofissue': date2,
        'image': image,
});
    }
  };
  return (
    <>
      <ScrollView>
        <Input
          Label={'Name'}
          placeholder={'Enter your name'}
          getValue={e => setName(e)}
          geterror={nameError}
        />
        <Input
          Label={'Email'}
          placeholder={'Enter your email'}
          regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
          getValue={e => setEmail(e)}
          geterror={emailError}
        />
        <Input
          Label={'Employee ID'}
          placeholder={'Enter your employee id'}
          getValue={e => setId(e)}
          geterror={idError}
        />
        <Input
          Label={'Address'}
          placeholder={'Enter your address'}
          getValue={e => setAddress(e)}
          geterror={addressError}
        />
        <Input
          Label={'Nationality'}
          placeholder={'Enter your nationality'}
          getValue={e => setNationality(e)}
          geterror={nationalityError}
        />
        <Input
          Label={'Mobile Number'}
          placeholder={'Enter your mobile number'}
          getValue={e => setNumber(e)}
          geterror={numberError}
        />
        <Calender getValue={e => setDate(e)} geterror={dateError} />
        <Calender getValue={e => setDate2(e)} geterror={date2Error} />
        <Imagepicker getValue={e => setImage(e)} geterror={imageError} />
        <View style={[styles.inputbody]}>
          <TouchableOpacity style={[styles.submit]} onPress={submit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50}} />
      </ScrollView>
    </>
  );
};

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
        <Text>No image selected</Text>
      )}
    </View>
  );
};

const Calender = ({getValue, geterror}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [temp, setTemp] = useState();

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = date => {
    getValue(date.date);
    setShowDatePicker(false);
    setTemp(date.date);
  };

  return (
    <View style={styles.inputbody}>
      <Text style={styles.dobtext}>Date of issue</Text>
      <Button title={'Open Calendar'} onPress={openDatePicker} />
      {temp !== undefined ? (
        <Text style={{paddingVertical: 8}}>{'' + temp}</Text>
      ) : null}
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </View>
  );
};

const Input = ({Label, placeholder, regex, geterror, getValue}) => {
  const [value, setValue] = useState('');
  const [check, setCheck] = useState(geterror);
  const error = 'Invalid ' + Label;
  const validator = e => {
    setValue(e);
    getValue(e);
    const regexp = regex;
    if (regex !== undefined) {
      if (!regexp.test(e)) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    } else {
      if (e === '') {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  };
  return (
    <View style={styles.inputbody}>
      <Text>{Label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        valid={check}
        onChangeText={e => validator(e)}
        value={value}
      />
      <Text
        style={{
          display: check === true || geterror === true ? 'flex' : 'none',
          color: 'red',
          fontSize: 16,
        }}>
        {error}
      </Text>
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

export default RegistrationForm;
