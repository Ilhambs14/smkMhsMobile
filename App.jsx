import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <View style={{height:52,
       backgroundColor:'red',
       marginHorizontal:1,
       borderRadius:99,
       marginTop:16,
       flexDirection: 'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingHorizontal:10,
       paddingVertical:16,}}>
      
      
      <Image 
      style={{width:100,height:100}} 
      Source={require('../AwesomeProject/src/assets/images2.png')}/>
    

      </View> 
      <View style={{width:20,
          height:20,
          backgroundColor: 'yellow',
          }}>
        </View>
    </View>

  )
}

export default App