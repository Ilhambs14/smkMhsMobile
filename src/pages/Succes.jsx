import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Succes = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#C40001',
              borderRadius: 100,
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            <Image
              source={require('../assets/Frame.png')}
              style={{
                marginTop: 7,
              }}
            />
          </View>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              marginLeft: -10,
              marginTop: 25,
              fontWeight: 'bold',
              color: '#000',
              fontSize: 18,
            }}>
            Kembali
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/img.png')}
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 150,
            marginTop: 30,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            marginHorizontal: 100,
            marginTop: 20,
          }}>
          Pemesanan Sukses
        </Text>
      </View>

      <View>
        <Text
          style={{
            marginLeft: 30,
            justifyContent: 'center',
            marginHorizontal: 30,
            marginVertical: 12,
            textAlign: 'center',
          }}>
          Pesanan Anda Telah Diterima dan Akan Segera Diproses.Mohon Ditunggu
          ya.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            width: 350,
            height: 50,
            backgroundColor: '#C40001',
            alignItems: 'center',
            marginHorizontal: 35,
            marginTop: 420,
            borderRadius: 12,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginVertical: 10,
              fontWeight: 'bold',
            }}>
            Kembali ke Menu Utama
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Succes;
