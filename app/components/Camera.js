 'use strict';
 import React, { Component } from 'react';
 import {
   Dimensions,
   StyleSheet,
   Text,
   TouchableHighlight,
   TouchableOpacity,
   View,
   StatusBar
 } from 'react-native';
 import CameraMod from 'react-native-camera';
 import Icon from 'react-native-vector-icons/MaterialIcons'

 const deviceHeight = Dimensions.get('window').height;
 const deviceWidth = Dimensions.get('window').width;

 export default class Camera extends Component {
   render() {
     return (
       <View style={styles.container}>
       <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
         hidden={true}
       />
        <View style={styles.topContainer}>
          <Text>Photo</Text>
        </View>
         <CameraMod
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={CameraMod.constants.Aspect.fill}>
           <View style={{margin: 15}}>
             <TouchableHighlight>
                <Icon name="cached" size={37} color="white" style={{backgroundColor: 'transparent'}}/>
             </TouchableHighlight>
          </View>
         </CameraMod>
         <View style={styles.bottomContainer}>
           <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
             <View style={styles.button}>
              <View style={styles.innerButton} />
             </View>
           </TouchableOpacity>
         </View>
       </View>
     );
   }

   takePicture() {
     this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   topContainer: {
     height: deviceHeight / 15,
     alignItems: 'center',
     justifyContent: 'center'
   },
   preview: {
     flex: 1,
     justifyContent: 'flex-end',
     height: deviceWidth,
     width: deviceWidth,
     alignItems: 'flex-start'
   },
   capture: {
     padding: 10,
     margin: 40
   },
   bottomContainer: {
    alignItems: 'center',
    //debug
    // borderColor: 'red',
    // borderWidth: 0.5
   },
   button: {
    height: deviceHeight / 8,
    width: deviceHeight / 8,
    backgroundColor: 'gray',
    borderRadius: deviceHeight / 16,
    alignItems: 'center',
    justifyContent: 'center'
   }, 
   innerButton: {
    height: deviceHeight / 11,
    width: deviceHeight / 11,
    backgroundColor: 'white',
    borderRadius: deviceHeight / 22
   }
 });