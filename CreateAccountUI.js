import React, { Componet } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Create an account! </Text>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        />
          <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        />
            <TextInput 
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        />
      

      <View style={styles.ButtonContainer}>
<TouchableOpacity style={styles.userButton}>

<Text style={styles.ButtonText}>Create Account</Text>
</TouchableOpacity>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems : 'center',
  backgroundColor: '#1e90ff'
},

welcome : {
fontSize: 30,
textAlign: 'center',
margin: 10,
color: "#fff",
fontFamily: 'DancingScript-Bold',

},

input : {
width: "90%",
backgroundColor: "#fff",
padding: 20,
marginBottom: 10,

},

userButton : {  
backgroundColor: "#fff",
padding: 15,

},

ButtonText : {
  fontSize: 15,
  textAlign: 'center',
  color: '#1e90ff'
},


})
