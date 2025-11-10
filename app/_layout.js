import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AppState, StatusBar } from 'react-native';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    Montserrat_Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_Medium: require('../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_SemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_ExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    const subscription = AppState.addEventListener("change", (_) => {
      StatusBar.setBarStyle("light-content");
    });
    return () => {
      subscription.remove();
    };
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/signinScreen" options={{ gestureEnabled: false }} />
      <Stack.Screen name="auth/signupScreen" />
      <Stack.Screen name="auth/verificationScreen" />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
      <Stack.Screen name="visitorDetail/visitorDetailScreen" />
      <Stack.Screen name="addNewVisitor/addNewVisitorScreen" />
      <Stack.Screen name="addGuest/addGuestScreen" />
      <Stack.Screen name="selectVisitingArea/selectVisitingAreaScreen" options={{ animation: 'slide_from_bottom', gestureEnabled: false }} />
      <Stack.Screen name="allowSuccess/allowSuccessScreen" options={{ gestureEnabled: false }} />
      <Stack.Screen name="addCab/addCabScreen" />
      <Stack.Screen name="addDelivery/addDeliveryScreen" />
      <Stack.Screen name="addService/addServiceScreen" />
      <Stack.Screen name="chat/chatScreen" />
      <Stack.Screen name="editProfile/editProfileScreen" />
      <Stack.Screen name="notifications/notificationsScreen" />
      <Stack.Screen name="privacyPolicy/privacyPolicyScreen" />
      <Stack.Screen name="termsAndCondition/termsAndConditionScreen" />
      <Stack.Screen name="support/supportScreen" />
    </Stack>
  );
}
