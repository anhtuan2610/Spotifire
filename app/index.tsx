import { useFonts } from "expo-font";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function IndexRedirect() {
  useFonts({
    "Helvatica-Black": require("@/assets/fonts/helvetica-neue/HelveticaNeueBlack.otf"),
    "Helvatica-Bold": require("@/assets/fonts/helvetica-neue/HelveticaNeueBold.otf"),
    "Helvatica-Medium": require("@/assets/fonts/helvetica-neue/HelveticaNeueMedium.otf"),
    "Helvatica-Light": require("@/assets/fonts/helvetica-neue/HelveticaNeueLight.otf"),
    "Helvatica-Thin": require("@/assets/fonts/helvetica-neue/HelveticaNeueThin.otf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isReady) {
    return (
      <View>
        <Text>Splash Screen...</Text>
      </View>
    );
  }

  return <Redirect href="/introduce" />;
}
