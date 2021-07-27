import * as React from 'react';
import { useState } from "react";
import { View, Text, Button, WebView, StyleSheet, TouchableOpacity, CheckBox, TextInput } from 'react-native';
import Constants from "expo-constants";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
 import { Video, AVPlaybackStatus } from 'expo-av';
 import { Card } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


export const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
}
//==========================
//Home Screen
//===========================
function Feed({ navigation }) {
  
return (
    <View style={styles.container}>
      <Text style={styles.title}>Health and Fitness</Text>

      <View style={styles.formControl}>
        <Text style={styles.formControlLabel}>Username</Text>

        <TextInput
          
          style={styles.textInput}
        />
      </View>

      <View style={styles.formControl}>
        <Text style={styles.formControlLabel}>Password</Text>

        <TextInput
          
          style={styles.textInput}
        />
      </View>

      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Login"
        accessibilityLabel="Login"
        color={"#841584"}
      />

      <Button
        
        title="Create Account"
        accessibilityLabel="Create An Account"
        color={"#841584"}
      />

      <Button
      
        title="Reset Password"
        accessibilityLabel="Reset your password"
        color={"#841584"}
      />
    </View>
  );
};


//================================
//Training Video
//================================
function Notifications() {
    const video = React.useRef(null);
   const [status, setStatus] = React.useState({});
  return (
    

     <View style={styles.container}>
     <View style={ { alignItems: "center", backgroundColor: "#ffb6c1", paddingVertical: "10px", marginBottom:" 20px"}}>

     <Text style ={{fontSize:"20px", color:"#c71585"}}> Fitness traning videos </Text>
     </View>

    <View style={ { alignItems: "left", paddingVertical: "5px",backgroundColor: "#d2b48c", marginBottom:"5px"}}>
     <Text style ={{fontSize:"14px", color:"#8b4513"}}> Video for Weight Ligfting </Text>
     </View>
       <Video
         ref={video}
         style={styles.video}
         source={{
           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'}}
         useNativeControls
         resizeMode="contain"
         isLooping
         onPlaybackStatusUpdate={status => setStatus(() => status)}
       />

       <View style={ { alignItems: "left", paddingVertical: "5px",backgroundColor: "#d2b48c", marginBottom:"5px"}}>
     <Text style ={{fontSize:"14px", color:"#8b4513"}}> Video for cardio </Text>
     </View>

       <Video
         ref={video}
         style={styles.video}
         source={{
           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
         useNativeControls
         resizeMode="contain"
         isLooping
         onPlaybackStatusUpdate={status => setStatus(() => status)}
       />
       <View style={ { alignItems: "left", paddingVertical: "5px",backgroundColor: "#d2b48c", marginBottom:"5px"}}>
     <Text style ={{fontSize:"14px", color:"#8b4513"}}> Video for Weight loss </Text>
     </View>
       <Video
         ref={video}
         style={styles.video}
         source={{
           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
         useNativeControls
         resizeMode="contain"
         isLooping
         onPlaybackStatusUpdate={status => setStatus(() => status)}
       />

       <View style={styles.buttons}>
         <Button
           title={status.isPlaying ? 'Pause' : 'Play'}
           onPress={() =>
             status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
           }
         />
       </View>
     </View>

  );
}

function ProgressReport() {

     let [date, setDate]= React.useState("")
    let [wtime, setWtime]= React.useState("")
    let [durations, setDurations]= React.useState("")
    let [time, setTime]= React.useState("")
    function onChangeName(){}

return (
  
 
  
    <View style={styles.container}>
    <Text style={{fontSize:"24px",textAlign: 'center', color:"#a52a2a"}}> Health and Fitness App</Text>
    <Text style={{fontSize:"18px",textAlign: 'left', color:"#4b0082"}}> Progress report</Text>
   
      <Card style={{padding:"15px", backgroundColor: "#008080", marginTop: "10px"}}> 
      <Text> Enter the date?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setDate(value)}
        value={date}
        keyboardType="Number"
      />
      <Text> Workout duration</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value)=>setDurations(value)}
        value={durations}
        keyboardType="Number"
      />
     
      <Text> Wrokout type</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setWtime(value)}
        value={wtime}
        keyboardType="Text"
      />



<Text> Total time spend</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setTime(value)}
        value={time}
        keyboardType="Text"
      />
      </Card>
      
      <TouchableOpacity style={styles.ButtonText}>
    
<Text>Save</Text>
</TouchableOpacity>
    </View>
  );
}

//===========================
//User information
//===========================
function userInformation() {
    let [name, setName]= React.useState("")
    let [email, setEmail]= React.useState("")
    let [phone, setPhone]= React.useState("")
    let [age, setAge]= React.useState("")
    let [gender, setGender]= React.useState("")
    let [weight, setWeight]= React.useState("")
    let [targetWeight, setTargetWeight]= React.useState("")
    let [time, setTime]= React.useState("")


return (
<View style={styles.containerC}>
    <Text style={{fontSize:"14px", color:"#c71585"}}> Fitness Center membership Information </Text>
      <Card style={{padding:"15px", backgroundColor: "#a9a9a9", marginTop: "10px"}}> 
      
      <Text> Input your Name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setName(value)}
        value={name}
        placeholder="Name"
        keyboardType="Text"
      />
      <Text> Gender</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setGender(value)}
        value={gender}
        placeholder="Gender"
        keyboardType="Text"
      />
      <Text> Input your Email?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setEmail(value)}
        value={email}
        placeholder="Email"
        keyboardType="Text"
      />
<Text> Input your Phone Number ?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setPhone(value)}
        value={phone}
        placeholder="Phone"
        keyboardType="Number"
      />

<Text> What is your age ?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setAge(value)}
        value={age}
        placeholder="Age"
        keyboardType="Number"
      />

<Text> What is your current weight ?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setWeight(value)}
        value={weight}
        placeholder="Weight"
        keyboardType="Number"
      />
      <Text> What is your target weight ?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setTargetWeight(value)}
        value={targetWeight}
        placeholder="Target Weight"
        keyboardType="Number"
      />
<Text> Class time </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setTime(value)}
        value={time}
        placeholder="Time"
        keyboardType="Text"
      />
      </Card>
      
      <TouchableOpacity style={styles.ButtonText}>
    
<Text>Submit</Text>
</TouchableOpacity>
    </View>

);

}

//=================
//Drawer Content
//=================
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

//========================
//My Drawer
//===========================

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Training Videos" component={Notifications} />
      <Drawer.Screen name="User Information" component={userInformation} />
      <Drawer.Screen name="Progress Report" component={ProgressReport} />
    </Drawer.Navigator>
  );
}

//=====================
//DEFAULT APP()
//=====================  
export default function App() {

return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}






//==============================
//Styles
//==============================
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#d3d3d3',
   },
   video: {
     alignSelf: 'center',
     width: 200,
     height: 100,
     backgroundColor:"#008080",
     marginBottom:4
   },
   buttons: {
     flexDirection: 'row',
     justifyContent: 'center',
     backgroundColor:"#ffb6c1",
     alignItems: 'center',
   },

  containerC: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input : {
width: "100%",
backgroundColor: "#e6e6fa",
padding: 10,
marginBottom: 10,

},
ButtonText : {
  width:100,
  fontSize: 15,
  textAlign: 'center',
  padding: 5,
  marginTop:5,
  color: '#f5fffa',
   borderRadius: 20,
   backgroundColor: "lightcoral"
   },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title : {
marginTop : 50,
padding : 25,
fontSize: 15,
textAlign: 'center',
fontWeight: "bold",
  },

  formControl : {
    width: "100%",
backgroundColor: "#e6e6fa",
padding: 10,
marginBottom: 10,
  },

 });
