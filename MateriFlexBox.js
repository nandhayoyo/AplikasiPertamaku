import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import pasfoto from './pasfoto.jpg';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={pasfoto}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              margin: 12,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nandha Yoyo</Text>
            <Text>192.000 Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
