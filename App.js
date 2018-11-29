import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'

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
  imageAppIntroSlider: {
    width: 120,
    height: 120,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    // titleStyle: styles.titleAppIntroSlider,
    text: 'Description.\nSay something cool',
    // textStyle: styles.textAppIntroSlider,
    image: require('./src/assets/1.png'),
    imageStyle: styles.imageAppIntroSlider,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    // titleStyle: styles.titleAppIntroSlider,
    text: 'Other cool stuff',
    // textStyle: styles.textAppIntroSlider,
    image: require('./src/assets/2.png'),
    imageStyle: styles.imageAppIntroSlider,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    // titleStyle: styles.titleAppIntroSlider,
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // textStyle: styles.textAppIntroSlider,
    image: require('./src/assets/3.png'),
    imageStyle: styles.imageAppIntroSlider,
    backgroundColor: '#22bcb5',
  }
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false
    }
  }
  _onDone = () => {
    // User finished the introduction. Show real app through navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
      );
    } else {
      return <AppIntroSlider 
                slides={slides} 
                hidePagination={false} 
                onDone={this._onDone} 
                showPrevButton={true}
                showSkipButton={true}
                onSkip={() => this.setState({ showRealApp: true })} />;
    }
  }
}