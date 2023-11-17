 import AsyncStorage from "@react-native-async-storage/async-storage";

 export const setDataOnStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
   } catch (e) {
     // saving error
   }
 };

 export const getDataFromStorage = async (key) => {
  try {
     const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
   } catch (e) {
    // error reading value
  } };
