import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React from 'react';
  
  const Home = ({ navigation }) => {
    return (
      <View style={style.hero}>
        <View style={style.navcon}>
          <View style={style.navbar}>
            <Image
              style={style.imagestyle}
              source={{
                uri: 'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang-1024x252.png',
              }}
            />
            <TouchableOpacity>
              <Image source={require('../assets/Vector.png')} />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={style.title}>
          <Text style={{color: '#A4A4A4', fontSize: 15}}>Selamat Datang Di</Text>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 16,
            }}>
            Kantin Multistudi
          </Text>
        </View>
  
        <View style={style.menucon}>
          <View style={{width: 390, marginBottom: 12}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Menu Makanan
            </Text>
          </View>
          <View style={style.menu}>
            <TouchableOpacity

        onPress={() => navigation.navigate('Detail')}>              

              <View style={style.descmenu}>
                <Image
                  style={style.fotomakan}
                  source={require('../assets/burgerayam.png')}
                />
  
                <Text
                  style={{
                    marginBottom: 4,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Burger 
                </Text>
                <Text
                  style={{
                    marginBottom: 4,
                    color: '#FF0202',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Rp. 20.000
                </Text>

                
              </View>
              
            </TouchableOpacity>
  
            <TouchableOpacity>
              <View style={style.descmenu}>
                <Image
                  style={style.fotomakan}
                  source={require('../assets/pizza.jpg')}
                />
  
                <Text
                  style={{
                    marginBottom: 4,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Pizza
                </Text>
                <Text
                  style={{
                    marginBottom: 4,
                    color: '#FF0202',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Rp. 35.000
                </Text>
              </View>
            </TouchableOpacity>
          </View>
  
          <View style={{width: 390, marginBottom: 12, marginTop: 36}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Menu Minuman
            </Text>
          </View>
          <View style={style.menu}>
            <TouchableOpacity>
              <View style={style.descmenu}>
                <Image
                  style={style.fotomakan}
                  source={require('../assets/download.jpg')}
                />
  
                <Text
                  style={{
                    marginBottom: 4,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Teh Obeng
                </Text>
                <Text
                  style={{
                    marginBottom: 4,
                    color: '#FF0202',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Rp. 5.000
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <View style={style.descmenu}>
                <Image
                  style={style.fotomakan}
                  source={require('../assets/limau.jpg')}
                />
  
                <Text
                  style={{
                    marginBottom: 4,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  kopi
                </Text>
                <Text
                  style={{
                    marginBottom: 4,
                    color: '#FF0202',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Rp. 10.000
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  
        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
            color: '#A4A4A4',
            fontSize: 14,
          }}>
          Created By : K Y U
        </Text>

      </View>
    );
  };
  
  const style = StyleSheet.create({
    hero: {
      width: '100%',
      height: '100%',
    },
    navbar: {
      backgroundColor: '#E93B3B',
      width: 390,
      borderRadius: 80,
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingRight: 19,
      paddingLeft: 19,
      marginTop: 10,
    },
    navcon: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      marginTop: 32,
      marginLeft: 20,
    },
    imagestyle: {
      width: 140,
      height: 32,
      borderWidth: 5,
    },
  
    menucon: {
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
    },
  
    menu: {
      width: 390,
      height: 215,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  
    descmenu: {
      width: 178,
      display: 'flex',
      alignContent: 'center',
      height: '100%',
    },
  
    fotomakan: {
      width: '100%',
      borderRadius: 6,
      height: 140,
      resizeMode: 'cover',
      marginBottom: 4,
    },
  });
  export default Home;
  