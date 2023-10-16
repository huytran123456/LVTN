import AsyncStorage from '@react-native-async-storage/async-storage';

const saveTokenToAsyncStorage = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error when save token to AsyncStorage:', error);
  }
}

const getTokenFromAsyncStorage = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.error('Error when get token from AsyncStorage:', error);
      return null;
    }
  }

export { getTokenFromAsyncStorage, saveTokenToAsyncStorage };