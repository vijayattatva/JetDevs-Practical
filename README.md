# JetDevPractical

Currently includes:

- React Native
- React Navigation
- Redux
- TypeScript

project

├── app

│   ├── assets

│   ├── components

│   ├── navigation

│   ├── redux
│   ├── screens

├── README.md

├── android

│   ├── app

│   ├── build.gradle

│   ├── gradle

│   ├── gradle.properties

│   ├── gradlew

│   ├── gradlew.bat

│   ├── keystores

│   └── settings.gradle

├── index.js

├── ios

│   ├── JetDevPractical

│   ├── JetDevPractical-tvOS

│   ├── JetDevPractical-tvOSTests

│   ├── JetDevPractical.xcodeproj

│   └── JetDevPractical

└── package.json


**assets** Where all the images will live of the entire application.

**components**
This is where Common components will live. Each component will have a directory containing the `.tsx` file.

**navigation**
This is where `react-navigation` navigators will live.

**redux**
This is where all the reducers and action of the application will live.

**screens**
This is where screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

# Setup Project

**Install and run on android**

yarn install or npn install

react-native run-android

**Install and run on ios**

yarn install or npn install

cd ios

pod install

react-native run-ios

**Start node server**

react-native start or npx react-native start

Note: If the react-native environment is not setup please follow the below link.

https://reactnative.dev/docs/environment-setup

