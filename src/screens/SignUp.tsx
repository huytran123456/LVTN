// SignUp.js
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView
} from 'react-native';
import { Box, Button, Input, Icon } from 'native-base';
import SwitchSelector from "react-native-switch-selector";
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../redux-toolkit/actions/auth'
import { } from '../redux-toolkit/slices/authSlice';

const { height, width } = Dimensions.get('window');
const options = [
  { label: "Sign Up", value: 0 },
  { label: "Sign In", value: 1 }
];

interface SignUpScreenProps {
  navigation: NavigationProp<any, any>;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) =>  {
  // const navigation = useNavigation()
  const dispatch = useDispatch()
  const auth = useSelector((stateRedux: any) => stateRedux.authReducer);

  const [tab, setTab] = useState(0)
  const [state, setState] = useState({
    fullName: '',
    password: '',
    phoneNumber: '',
    email: '',
    userNameValid: false,
    passwordValid: false,
    phoneNumberValid: false,
  });

  const onChangeText = (key, val) => {
    const newState = { ...state, [key]: val };
    validationInput(key, val, newState);
  }

  useEffect(() => {
    if (auth.signUp.loading == 'fulfilled') {
      alert('Sign up successfully')
    }
  }, [auth.signUp.loading])

  useEffect(() => {
    if (auth.signIn.loading == 'fulfilled') {
      navigation.navigate('BottomTabs')
    }
  }, [auth.signIn.loading])

  const validationInput = (key, val, newState) => {
    if (key == 'fullName') {
      newState.userNameValid = !!(val && val.trim() !== "");
    }
  
    if (key == 'phoneNumber') {
      const reg = new RegExp(/^[0-9\b\+\-\(\)]+/);
      newState.phoneNumberValid = !!(val && val.trim() !== "" && reg.test(val));
    }
  
    if (key == 'password') {
      newState.passwordValid = !!(val && val.trim() !== "");
    }

    if (key == 'email') {
      newState.emailValid = !!(val && val.trim() !== "")
    }
  
    setState(newState);
  }

  const goBack = () => {
    navigation.goBack();
  }
  
  const handleSignUp = async () => {
    const fullName = state.fullName;
    const password = state.password;
    const phoneNumber = state.phoneNumber;
    const email = state.email;
    const userNameValid = state.userNameValid;
    const passwordValid = state.passwordValid;
    const phoneNumberValid = state.phoneNumberValid;
    const emailValid = state.email;

    try {
      if (!userNameValid || !passwordValid || !phoneNumberValid) {
        console.log('Inputs are invalid');
        return;
      }
      // @ts-ignore
      dispatch(signUp({ fullName, email, phoneNumber, password }))
    } catch (err) {
      console.log('error signing up: ', err.message);
    }
  }

  const handleSignIn = async () => {
    const { phoneNumber, password } = state;
    try {
      // @ts-ignore
      dispatch(signIn({ phoneNumber, password }));
    } catch (error) {
      console.log('Error Message ', error);
    }
  };
  return (
    <SafeAreaView>
      <View >
        <Pressable style={styles.goBack} onPress={goBack}>
          <Image style={styles.imageBackground} source={require('../public/images/Back.png')} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.header_1}>Shipping and Track Anytime </Text>
        <Text style={styles.subTitle}>Get great experience with tracky</Text>
        <View style={styles.switchSelector}>
          <SwitchSelector
            options={options}
            textColor='#000000'
            height={height * 0.07}
            selectedColor='#FFFFFF'
            buttonColor='#F79E1B'
            backgroundColor='#FFFFFF'
            fontSize={16}
            initial={0}
            onPress={value => setTab(value)}
            bold={true}
            borderRadius={25}
          />
        </View>

        {tab === 0 && 
        <View>
          <ScrollView style={styles.buttonGroup}>
            <Text style={styles.header_2}>Full Name</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.userNameValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/profile.png')} />}
                placeholder="Enter your name"
                onChangeText={val => onChangeText('fullName', val)}
                autoCapitalize='words' />
            </Box>
            <Text style={styles.header_2}>Email</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.userNameValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/profile.png')} />}
                placeholder="Enter your email"
                onChangeText={val => onChangeText('email', val)} 
                autoCapitalize='none' />
            </Box>
            <Text style={styles.header_2}>Phone Number</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.phoneNumberValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/call.png')} />}
                placeholder="Enter your number"
                onChangeText={val => onChangeText('phoneNumber', val)} />
            </Box>
            <Text style={styles.header_2}>Password</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input w={{}} borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.passwordValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/lock.png')} />}
                placeholder="Enter your password"
                type={"password"}
                onChangeText={val => onChangeText('password', val)} 
                autoCapitalize='none' />
            </Box>
            <Text style={styles.header_2}>Retype Password</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input w={{}} borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.passwordValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/lock.png')} />}
                placeholder="Enter your retype password"
                type={"password"}
                onChangeText={val => onChangeText('password', val)} />
            </Box>
          </ScrollView>
          <Box alignItems="center">
            <Button style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Create account</Text>
            </Button>
          </Box>
        </View>}

        {tab === 1 && 
        <View>
          <View style={styles.buttonGroup}>
            <Text style={styles.header_2}>Phone Number</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input w={{}} borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.phoneNumberValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/call.png')} />}
                placeholder="Enter your phone number"
                keyboardType='numeric'
                onChangeText={val => onChangeText('phoneNumber', val)} />
            </Box>
            <Text style={styles.header_2}>Password</Text>
            <Box alignItems="center" style={{ marginBottom: 16 }}>
              <Input w={{}} borderRadius={30}
                _focus={styles.inputHover}
                style={styles.input}
                InputLeftElement={<Image style={state.passwordValid ? styles.imageInputSuccess : styles.imageInput}
                  source={require('../public/images/lock.png')} />}
                placeholder="Enter your password"
                type={"password"}
                onChangeText={val => onChangeText('password', val)} />
            </Box>
          </View>
          <Box alignItems="center">
            <Button style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Button>
          </Box>
        </View>}

      </View>

      <View style={styles.container}>
        <View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#F3F3F3' }} />
          <Box alignItems="center">
            <Text style={styles.textNormal}>Or Sign Up With</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button
                leftIcon={<Image source={require('../public/images/google.png')} />}
                style={styles.buttonGoogle} onPress={() => console.log("Google Sign Up")}>
                <Text style={styles.buttonTextGoogle}>Sign Up with Google</Text>
              </Button>
            </View>
          </Box>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header_1: {
    fontSize: 25,
    fontWeight: "700",
  },
  header_2: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '200',
    //textAlign: 'center',
    marginTop: 10
  },
  imageBackground: {
    height: 70,
    borderColor: '#F3F3F3'
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // You can adjust the resizeMode as needed
  },
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: '#F79E1B',
    width: '100%',
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  },
  buttonNotSignIn: {
    color: '#FF5733',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 2,
    width: '100%',
    height: 60,
    borderRadius: 30,
    marginTop: 10
  },
  buttonNotSignInText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700'
  },
  buttonGroup: {
    marginTop: 20,
    height: 400
  },
  switchSelector: {
    marginTop: 30,
  },
  goBack: {
    left: width * 0.05,
    width: 100,
    backgroundColor: 'transparent'
  },
  input: {
    width: width * 0.8,
    height: height * 0.05,
    //backgroundColor: '#F79E1B',
    padding: 8,
    color: 'black',
    borderRadius: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  boxInput: {
    borderRadius: 30,
  },
  inputHover: {
    backgroundColor: "#fff",
    borderColor: "#1D272F",
  },
  imageInput: {
    height: height * 0.03,
    marginLeft: width * 0.03,
    width: width * 0.07,
  },
  imageInputSuccess: {
    height: height * 0.03,
    marginLeft: width * 0.03,
    width: width * 0.06,
    tintColor: '#F79E1B'
  },
  textNormal: {
    fontSize: 14,
    fontWeight: "500",
    //textAlign: "center",
    color: "#A7A9B7",
  },
  googleIcon: {
    height: 20,
  },
  buttonGoogle: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: "#FFFFFF"
  },
  buttonTextGoogle: {
    color: '#191D31',
    fontSize: 16,
    fontWeight: '700'
  },
})

export default SignUpScreen;