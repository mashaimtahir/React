import AsyncStorage from '@react-native-async-storage/async-storage';

const Save = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    console.error(error);
  }
};

const Get = async name => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (error) {
    console.error(error);
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.error(e);
  }
};

const GetValue = name => {
  return new Promise((resolve, reject) => {
    let did = AsyncStorage.getItem(name);
    console.log('did', did);
    resolve(did);
  });
};

GetValue()
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(error => console.error(error));

// const myFunction = name => {
//   return new Promise((resolve, reject) => {
//     if (name == 'hamza') {
//       resolve(true);
//     } else {
//       reject(false);
//     }
//   });
// };

// myFunction('ali')
//   .then(result => {
//     console.log(result, 'resultresult');
//   })
//   .catch(err => {
//     console.log(err);
//   });

export {Save, Get, getAllKeys, GetValue};
