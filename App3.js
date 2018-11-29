/**
 * Ardityo Giantra
 * agiantra123@gmail.com
 **/

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

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
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image: {
        width: 320,
        height: 320,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
});

const slides = [
    {
      key: 'somethun',
      title: 'Quick setup, good defaults',
      text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
      icon: 'md-images',
      colors: ['#63E2FF', '#B066FE'],
    },
    {
      key: 'somethun1',
      title: 'Super customizable',
      text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
      icon: 'md-options',
      colors: ['#A3A1FF', '#3A3897'],
    },
    {
      key: 'somethun2',
      title: 'No need to buy me beer',
      text: 'Usage is all free',
      icon: 'md-beer',
      colors: ['#29ABE2', '#4F00BC'],
    },
];

export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        showRealApp: false
        }
    }
    _renderItem = props => (
        <LinearGradient
        style={[styles.mainContent, {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
        }]}
        colors={props.colors}
        start={{x: 0, y: .1}} end={{x: .1, y: 1}}
        >
        <Icon style={{ backgroundColor: 'transparent' }} name={props.icon} size={200} color="white" />
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        </LinearGradient>
    );
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
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    bottomButton />;
        }
    }
}