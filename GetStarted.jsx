import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey There.</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/dog3.png")} style={styles.img} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1DACA',
    flex: 1,
  },
  text: {
    fontSize: 50,
    marginTop: 90,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#A18167',
  },
  img: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginTop: 50,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 40,
    marginVertical:100,
    backgroundColor:'#A18167',
    height:45,
  },
  btnText:{
    fontWeight:'bold',
    fontSize:17,
    color:'#F2E9DE'

  },
})