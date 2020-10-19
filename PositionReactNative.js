import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from './cart.png';

export default function PositionReactNative() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.materi}>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  materi: {fontSize: 20, paddingBottom: 40},
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderColor: '#4398d1',
    borderWidth: 2,
    height: 93,
    width: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
