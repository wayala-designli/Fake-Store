This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone repository

Using the command: **git clone <repository_url>**

## Step 2: Install dependencies

You should run one of these commands:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### For iOS

```bash
# Install CocoaPods
cd ios && pod install
```

## Step 3: Start your Application

You need to create the _.env_, _.env.development_ and _.env.production_ files in the root of your project, following the example of .env.example to add the variables, in this case only BASE_URL is needed, but because it's a test and a public API, the value is https://api.escuelajs.co/api/v1

After that, the steps to run are:

### For Android

```bash
# development debug mode
npx react-native run-android --mode=developmentDebug

# OR production debug mode
npx react-native run-android --mode=productionDebug
```

### For iOS

```bash
# development mode
1. Enter to XCode
2. Select "development" schema
3. Select "Product" menu -> clean build folder
4. Select an iOS simulator
5. Select Run option

# OR production mode
1. Enter to XCode
2. Select "FakeStore" schema
3. Select "Product" menu -> clean build folder
4. Select an iOS simulator
5. Select Run option
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_.

# About the project 

This structure follows the Hexagonal Architecture, maintaining a clear separation between the business logic, the user interface and the details of the infrastructure and technology:

- **src/**: The root folder.
- **api/**: Folder containing client and API calls.
- **assets/**: Folder for assets like icons, images, etc.
- **components/**: User interface components to be used in the application.
- **constants/**: Folder to hold constant values used throughout the app like colors, dimensions, etc.
- **domain/**:
  - **models/**: Defines data models for the application.
- **hooks/**: Custom React hooks.
- **mocks/**: Dummy Data.
- **navigation/**: Handles app navigation logic.
- **screens/**: Screens with which the user interacts.
- **store/**: Manages application state (Zustand).
- **utils/**: This folder contains the pure functions that are used throughout the app.
