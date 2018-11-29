## Libraries:
1. https://github.com/Jacse/react-native-app-intro-slider
2. https://github.com/oblador/react-native-vector-icons
3. https://github.com/react-native-community/react-native-linear-gradient

## Options:
- Basic Example (Lib. 1 only) -> App
- Configuring Buttons (Lib. 1, Lib. 2) -> App2
- Custom Slide Layout (Lib. 1, Lib. 2, Lib. 3) -> App3

## Steps:
1. Devide render() function in App.js to two sections with if else (showRealApp function)
2. The first section is for Real App or Navigation
3. The second one is for AppIntroSlider

## Tips:
1. Use navigation with react-native-navigation
2. Use AsyncStorage or redux-persist to save showRealApp state to show AppIntroSlider for the first open only
3. Write styles const on the top before slides