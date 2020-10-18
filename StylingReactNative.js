import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import iphone from './iphoneXR.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={iphone}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Iphone XR 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#f2994a',
          }}>
          Rp. 10.500.000,00
        </Text>
        <Text style={{fontSize: 12, marginTop: 12, fontWeight: '300'}}>
          Jakarta Selatan
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            borderRadius: 30,
            marginTop: 8,
            paddingVertical: 6,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StylingReactNativeComponent;
