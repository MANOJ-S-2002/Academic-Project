import React from 'react'
import { View,Text,NativeModules } from 'react-native'


const {HelloYt}=NativeModules;
export default function AppUsage() {

const handleOnPress=()=>{
  // HelloYt.sayHello("Surya",(err,message)=>{
  //   if(err) return console.log(err)
  //   console.log("Message",message);
  // });
  console.log("hello")
}

  return (
<>
<View style={{paddingTop:100}}>
    <Text  onPress={handleOnPress}>This shows the mobile usage of your child's phone</Text>
</View>

</>  )
}
