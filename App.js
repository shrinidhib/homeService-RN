import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn,SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

// font
import { useFonts } from 'expo-font'

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      console.log("here1", err)
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
        console.log("here",err)
      return;
    }
  },
};


export default function App() {

  const [fontsLoaded]=useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    

  })
  return (
    
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <View style={styles.container}>
      {/* Sign in component */}
      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
      </SignedIn>
      {/* sign out component */}
      <SignedOut>
          <Login/>
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
