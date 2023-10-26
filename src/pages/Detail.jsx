import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
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
          style={{
            alignSelf: 'center',
            width: 380,
            height: 290,
            marginTop: 10,
            borderRadius: 6,
          }}
          source={require('../assets/burgerayam.png')}
        />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginLeft: 25,
            marginTop: 15,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 18,
          }}>
          Burger
        </Text>

        <Text
          style={{
            marginRight: 25,
            marginTop: 15,
            fontWeight: 'bold',
            color: '#C40001',
            fontSize: 18,
          }}>
          Rp.15.000
        </Text>
      </View>

      <View style={{
        width:400,
      }}>
        <Text
          style={{
            color: '#A4A4A4',
            fontSize: 14,
            alignItems:'center',
            marginHorizontal:30,
            marginVertical:12,
          }}>
          Patty dalam istilah bahasa Inggris di beberapa negara seperti Amerika
          Serikat adalah daging giling dari berbagai produk hewani atau produk
          alternatif dari daging yang dipipihkan dan dicetak, biasanya berbentuk
          bulat.
        </Text>

        <Image
            source={require('../assets/garis.png')}
            style={{width:400,
            marginLeft:10,}}
            />

      </View>
          <View>
            <Text style={{
              color:'#000',
              marginTop:10,
              marginLeft:14,
              fontSize:14,

            }}>
              MASUKAN JUMLAH PESANAN
            </Text>
          </View>
             
             <View>
              <TextInput placeholder='Masukan Jumlah Pesanan' style={{
                borderWidth:1,
                marginLeft:10,
                marginRight:10,
                marginTop:20,
                
              }} />

             </View>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>

             <View style={{
              width: 350,
              height: 50,
              backgroundColor: '#C40001',
              alignItems: 'center',
              marginHorizontal: 30,
              marginTop: 90,
              borderRadius:12,
             }}>
              

              <Text style={{
                color:'white',
                fontSize:14,
                marginVertical:10,
                fontWeight:'bold'
              }}>
                KONFIRMASI</Text>
               
             </View>
             </TouchableOpacity>
             
    </View>
  );
};

export default Detail;
