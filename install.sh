react-native init manager

settings.json
{
  "editor.tabSize": 2
}

npm install -g eslint
npm install --save-dev eslint-config-rallycoding

.eslintrc
{
  "extends": "rallycoding"
}

npm install --save react-redux redux
npm install --save axios
npm install --save firebase
npm install --save redux-thunk
npm install --save react-native-router-flux@3.35.0

react-native run-ios


rm -rf node_modules && npm install
rm -rf android/build && rm -rf ios/build
