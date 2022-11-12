import AsyncStorage from '@react-native-async-storage/async-storage';

const Save = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    console.log(error);
  }
};

const Get = async name => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (error) {
    console.log(error);
  }
};

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

export {Save, Get};
