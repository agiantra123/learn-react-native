import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'

export default class App extends Component {
  componentDidMount() {
    // ImagePicker.openPicker({
    //   width: 400,                             // cropping width
    //   height: 400,                            // cropping height
    //   cropping: true,
    //   // multiple: true,                         // cropping is not available for multiple option
    //   // mediaType: 'video',
    //   freeStyleCropEnabled: true,             // if true, user can crop with custom height and width
    //   cropperActiveWidgetColor : 'green',
    //   cropperStatusBarColor: 'red',
    //   cropperToolbarColor: 'blue',
    //   cropperToolbarTitle: 'Hai guysss',
    //   cropperCircleOverlay: false             // if true, circural cropping, not reactangular

    // }).then(image => {
    //   console.log(image); // this will log properties of image such as path, modification date, etc
    // });

    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
