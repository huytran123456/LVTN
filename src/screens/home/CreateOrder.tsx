import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pressable, Image, StyleSheet, Dimensions, Button, TextInput } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import OrderDetail from './orderDetail';
import OrderTypeChoosing from './orderDetail/moreDetails/OrderType';
import TotalWeightChoosing from './orderDetail/moreDetails/TotalWeight';
import TotalDimensionChoosing from './orderDetail/moreDetails/TotalDimensionChoosing';
import NoteForDriver from './orderDetail/moreDetails/NoteForDriver';

const { height, width } = Dimensions.get('window');

interface Props {
  navigation: NavigationProp<any, any>;
}

const CreateOrder = ({ navigation }) => {
  const { control, handleSubmit, setValue } = useForm();
  const [fields, setFields] = useState([{ name: 'packageDestination', value: '' }]);

  const addField = () => {
    const newFields = [...fields, { name: `packageDestination${fields.length}`, value: '' }];
    setFields(newFields);
  };

  const [collapse, setCollapse] = useState({
    isOrderTypeChoosingVisible: false,
    isTotalWeightVisible: false,
    isTotalDimensionVisible: false,
    isNoteVisible: false,
  })

  const onSubmitScreen1 = (data) => {
    navigation.navigate('test2', { data });
  };

  const goBack = () => {
    navigation.goBack();
  }
  
  const { height, width } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.containerParent}>
      <ScrollView style={[styles.container, {marginTop: 20}]} showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
        <View>
          <View>
            <Pressable style={styles.goBack} onPress={goBack}>
              <Image style={styles.imageBackground} source={require('../../public/images/Back.png')} />
            </Pressable>
          </View>
          <View>
            <Text style={styles.header_1}>High load delivery</Text>
            <Text style={styles.subTitle}>Any time, Any where, deverse transportations</Text>
          </View>
        </View>
        <View>
          <View style={styles.pickUpGroup}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Pickup location"
                  value={value}
                  onChangeText={onChange}
                  style={styles.addressInput}
                />
              )}
              name="pickUpLocation"
              defaultValue=""
            />
            {/* <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Package destination"
                  value={value}
                  onChangeText={onChange}
                  style={styles.addressInput}
                />
              )}
              name="packageDestination"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Package destination"
                  value={value}
                  onChangeText={onChange}
                  style={styles.addressInput}
                />
              )}
              name="packageDestination2"
              defaultValue=""
            /> */}
            {fields.map((field, index) => (
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    placeholder={"Package Destination"}
                    value={value}
                    onChangeText={onChange}
                    style={styles.addressInput}
                  />
                )}
                key={`packageDestination`+index}
                name={`packageDestination`+index}
                defaultValue=""
              />
            ))}
          <Button title="Thêm trường" onPress={addField} />
          </View>
          <Text style={styles.header_3}>More Details</Text>
          <View style={styles.orderDetailGroups}>
            <OrderDetail 
              id={1}
              title={"Order Information"} 
              subTitle={"Add description for your order"} 
              navigate={'OrderInformation'}
              collapse={collapse}
              setCollapse={setCollapse}
            />
              {collapse.isOrderTypeChoosingVisible && <OrderTypeChoosing control={control} />}
            <OrderDetail 
              id={2}
              title={"Total Weight"} 
              subTitle={"Estimate total weight"} 
              navigate={'Home'}
              collapse={collapse}
              setCollapse={setCollapse}
              />
              {collapse.isTotalWeightVisible && <TotalWeightChoosing control={control} />}
            <OrderDetail 
              id={3}
              title={"Total dimension"} 
              subTitle={"Est total dimension"} 
              navigate={'Home'}
              collapse={collapse}
              setCollapse={setCollapse}
              />
              {collapse.isTotalDimensionVisible && <TotalDimensionChoosing control={control} />}
            <OrderDetail 
              id={4}
              title={"Note for driver"} 
              subTitle={"Add your important note to driver"} 
              navigate={'Home'}
              collapse={collapse}
              setCollapse={setCollapse}/>
              {collapse.isNoteVisible && <NoteForDriver control={control} />}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmitScreen1)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerParent: {
    minHeight: height,
    marginLeft: 20,
    marginRight: 20
  },
  header_1: {
    fontSize: 25,
    fontWeight: "700",
  },
  header_3: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20
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
  goBack: {
    width: 100,
    backgroundColor: 'transparent'
  },
  imageBackground: {
    height: 70,
    borderColor: '#F3F3F3'
  },
  container: {
    // marginLeft: 20,
    // marginRight: 20
  },
  pickUpGroup: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    gap: 15
  },
  addressInput: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  orderDetailGroups: {
    gap: 20,
    marginBottom: 150
  },
  button: {
    backgroundColor: '#F79E1B',
    padding: 20,
    borderRadius: 16,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
})

export default CreateOrder