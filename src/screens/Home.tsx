// SignUp.js
import React, { useEffect, useState } from 'react'
import { NavigationProp } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  BackHandler,
  Alert,
  Image,
  SafeAreaView
} from 'react-native';
import { Box, Button, Input, Icon, VStack, HStack, Divider, Center } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const { height, width } = Dimensions.get('window');
const options = [
  { label: "Sign Up", value: "SignUpScreen" },
  { label: "Sign In", value: "SignInScreen" }
];

interface Props {
  navigation: NavigationProp<any>; // Use the NavigationProp type
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [hasNoti, setHasNoti] = useState(false);
  const [orders, setOrders] = useState("234234234234234234");


  const goToNoti = () => {
    console.log("Go to Noti");
  }

  const goToTopUp = () => {
    console.log("Go to Order list");
  }

  const goToScan = () => {
    console.log("Go to Scan");
  }

  const goToCreateOrder = () => {
    console.log("Go to Check Rate");
    navigation.navigate("CreateOrder")
  }

  const goToOrder = () => {
    console.log("Go to Order");
  }

  const goToHelpCenter = () => {
    console.log("Go to Help Center");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.containerHeader} >
          <View style={styles.containerHeaderRow1}>
            <Image style={styles.imageBackgroundHeader} source={require('../public/images/logoCseDeli.png')} />
            <Text style={styles.titleHeader}>CSEDeli</Text>
            <Pressable style={styles.noti} onPress={goToNoti}>
              <Image style={styles.notiIcon} source={hasNoti ? require('../public/images/noti.png') : require('../public/images/noti1.png')} />
            </Pressable>
          </View>
          <View style={styles.containerHeaderRow2}>
            <View style={styles.containerHeaderRow1}>
              <Text style={styles.titleHeaderRow2}>Number Of Current Orders</Text>
              {/* <View style={styles.topUp}>
              <Text style={styles.titleHeaderRow2} >View</Text>
              <Pressable onPress={this.goToTopUp}>
                <Image style={styles.topUpIcon} source={require('../public/images/topUp.png')} />
              </Pressable>
            </View> */}
            </View>
            <View style={styles.containerHeaderRow2Dot1}>
              <Box alignItems="center" style={styles.inputHeaderBox}>
                <Input w={{}} borderRadius={30}
                  _focus={styles.inputHover}
                  isFocused={true}
                  isReadOnly={true}
                  style={styles.inputHeader}
                  value={orders}
                />
              </Box>
            </View>
            <Text style={styles.titleHeaderRow2}></Text>
            <View style={styles.containerHeaderRow2Dot2}>
              <Box alignItems="center" style={styles.inputHeaderBox}>
                <Input w={{}} borderRadius={30}
                  _focus={styles.inputTrack}
                  isFocused={true}
                  style={styles.inputHeader}
                  InputLeftElement={<Image style={styles.imageInput}
                    source={require('../public/images/search-normal.png')} />}
                  InputRightElement={<Pressable onPress={goToScan}>
                    <Image style={styles.imageInputRight}
                      source={require('../public/images/scan.png')} />
                  </Pressable>}
                  placeholder="Enter track number"
                />
              </Box>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Features </Text>
          <VStack space={5} alignItems="center">
            <HStack space={6} justifyContent="center">
              <View style={styles.featureItem}>
                <Pressable onPress={goToCreateOrder}>
                  <Image style={styles.featureIcon} source={require('../public/images/dollar-circle.png')} />
                  <Text style={styles.titleFeatureItem} >Delivery</Text>
                </Pressable>
              </View>
              <View style={styles.featureItem}>
                <Pressable onPress={goToOrder}>
                  <Image style={styles.featureIcon} source={require('../public/images/box.png')} />
                  <Text style={styles.titleFeatureItem} >Order</Text>
                </Pressable>
              </View>
              <View style={styles.featureItem}>
                <Pressable onPress={goToHelpCenter}>
                  <Image style={styles.featureIcon} source={require('../public/images/sms-tracking.png')} />
                  <Text style={styles.titleFeatureItem} >Help Center</Text>
                </Pressable>
              </View>
            </HStack>
          </VStack>
          <Text style={styles.title}>Current Orders </Text>
          <VStack space={5} alignItems="center">
            <View style={styles.orderListItem}>
              <HStack space={1} justifyContent="center">
                <Image style={styles.orderIcon} source={require('../public/images/box.png')} />
                <VStack space={0.05} >
                  <Text style={styles.orderDetail} >&nbsp;MM09132005 {'\n'}</Text>
                  <Text style={styles.orderDetailNotBold} >&nbsp;Processed at sort facility</Text>
                </VStack>
                <Text style={styles.orderDetailNotBold} > 20h</Text>
              </HStack>
            </View>
            <View style={styles.orderListItem}>
              <HStack space={1} justifyContent="center">
                <Image style={styles.orderIcon} source={require('../public/images/box.png')} />
                <VStack space={0.05}>
                  <Text style={styles.orderDetail} >&nbsp;MM09132005 {'\n'}</Text>
                  <Text style={styles.orderDetailNotBold} >&nbsp;Processed at sort facility</Text>
                </VStack>
                <Text style={styles.orderDetailNotBold} > 20h</Text>
              </HStack>
            </View>
            <View style={styles.orderListItem}>
              <HStack space={1} justifyContent="center">
                <Image style={styles.orderIcon} source={require('../public/images/box.png')} />
                <VStack space={0.05} >
                  <Text style={styles.orderDetail} >&nbsp;MM09132005 {'\n'}</Text>
                  <Text style={styles.orderDetailNotBold} >&nbsp;Processed at sort facility</Text>
                </VStack>
                <Text style={styles.orderDetailNotBold} >20h</Text>
              </HStack>
            </View>
          </VStack>
        </View>
        <View
          style={{
            borderBottomColor: '#A7A9B7',
            marginTop: 40,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    //textAlign: "center",
    marginTop: 20,
  },

  subTitle: {
    fontSize: 15,
    fontWeight: '200',
    //textAlign: 'center',
    marginTop: 10
  },

  background: {
    flex: 1,
    resizeMode: 'cover', // You can adjust the resizeMode as needed
  },
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    backgroundColor: '#F79E1B',
    width: '100%',
    height: 60,
    borderRadius: 30,
    marginTop: 10
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
    marginTop: 30,
  },
  switchSelector: {
    marginTop: 30,
  },
  goBack: {
    left: width * 0.05,
    width: 100,
    marginTop: 30,
    backgroundColor: 'transparent'
  },
  input: {
    width: width * 0.8,
    height: height * 0.06,
    //backgroundColor: '#F79E1B',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 30,
    fontSize: 18,
    fontWeight: '500',
  },
  boxInput: {
    borderRadius: 30,
  },
  imageInputSuccess: {
    height: height * 0.04,
    marginLeft: width * 0.03,
    width: width * 0.08,
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
  imageBackground: {
    height: 100,
    borderColor: '#F3F3F3'
  },


  containerHeader: {
    // marginLeft: 20,
    // marginRight: 20,
    backgroundColor: "#1D272F",
    height: height * 0.45
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "700",
    //textAlign: "center",
    marginTop: height * 0.1,
    marginLeft: width * 0.05,
    color: "#FFFFFF"
  },
  imageBackgroundHeader: {
    marginTop: height * 0.1,
    height: height * 0.05,
    width: width * 0.05,
    marginLeft: width * 0.1,
    borderColor: '#F3F3F3',
    marginBottom: height * 0.03,
  },
  noti: {
    left: width * 0.43,
    // width: width * 0.5,
    backgroundColor: 'transparent',
    marginTop: height * 0.09,
    marginRight: height * 0.05,
  },
  notiIcon: {
    width: 50,
    height: 50,
  },
  containerHeaderRow1: {
    flexDirection: 'row',
  },
  containerHeaderRow2Dot1: {
    alignItems: 'center'
  },
  containerHeaderRow2: {

  },
  inputHeader: {
    // width: width * 0.4,
    height: height * 0.06,
    //backgroundColor: '#F79E1B',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 30,
    fontSize: 18,
    fontWeight: '500',
    // backgroundColor: "#FFFFFF"
  },
  inputHeaderBox: {
    width: width * 0.9,
    height: height * 0.06,
    //backgroundColor: '#F79E1B',
  },
  titleHeaderRow2: {
    fontSize: 16,
    fontWeight: "700",
    //textAlign: "center",
    color: "#FFFFFF",
    textAlign: "left",
    marginLeft: width * 0.1,
    marginBottom: 10
  },
  inputHover: {
    backgroundColor: "#fff",
    borderColor: "#1D272F",
  },
  inputHover1: {
    backgroundColor: "#fff",
    borderColor: "#1D272F",
  },
  topUp: {
    left: width * 0.25,
    // width: width * 0.5,
    flexDirection: 'row',
  },
  topUpIcon: {
    marginLeft: 10,
    marginBottom: 10,
    tintColor: '#FFFFFF'
  },
  containerHeaderRow2Dot2: {
    // marginTop: 30,
    alignItems: 'center'
  },
  inputTrack: {
    backgroundColor: "#F79E1B",
    borderColor: "#1D272F",
  },
  imageInputRight: {
    height: height * 0.04,
    marginRight: width * 0.03,
    width: width * 0.08,
  },
  imageInput: {
    height: height * 0.04,
    marginLeft: width * 0.03,
    width: width * 0.08,
  },
  featureItem: {
    marginTop: 10,
    width: width * 0.2,
    alignItems: 'center',
  },
  titleFeatureItem: {
    fontSize: 16,
    fontWeight: "700",
    //textAlign: "center",
    color: "black",
    marginBottom: 10
  },
  featureIcon: {
    // marginLeft: width * 0.001,
    height: 50,
    width: 50,
    tintColor: '#F79E1B'
  },
  orderListItem: {
    marginTop: 10,
    width: width * 0.8,
    borderWidth: 0.5,
    borderRadius: 25,
    borderColor: "#A7A9B7",
  },
  orderItem: {
    margin: 10,

  },
  orderIcon: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginLeft: -width * 0.05,
  },
  orderDetail: {
    fontSize: 16,
    fontWeight: "600",
    //textAlign: "center",

  },
  orderDetailNotBold: {
    fontSize: 16,
    fontWeight: "600",
    //textAlign: "center",
    color: "#A7A9B7"
  },
  containerFooter: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  }
})

export default HomeScreen;