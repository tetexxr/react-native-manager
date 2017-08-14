# Manager

## Create ReactNative project & install dependencies

```
# To create ReactNative project
react-native init manager

npm install -g eslint
npm install --save-dev eslint-config-rallycoding
npm install --save react-redux redux
npm install --save axios
npm install --save firebase
npm install --save redux-thunk
npm install --save react-native-router-flux@3.35.0

# To run in iOS device
react-native run-ios
```

## Configure tab size for VSCode 

In file `settings.json`:
```json
{
  "editor.tabSize": 2
}
```

## Configure ESLint

In file `.eslintrc`:
```json
{
  "extends": "rallycoding"
}
```

## Help

1. Clear watchman watches:  
`watchman watch-del-all`  
2. Delete the `node_modules` folder:  
`rm -rf node_modules && npm install`  
3. Reset packager cache:  
`rm -fr $TMPDIR/react-*` or `npm start -- --reset-cache`  
4. Clear build results for iOS and Android:  
`rm -rf android/build && rm -rf ios/build`  
5. Upgrade _react-native-cli_ to latest version:  
`npm i -g react-native-cli`  
6. Create iOS & Android folders with needed files:  
`react-native upgrade`  
