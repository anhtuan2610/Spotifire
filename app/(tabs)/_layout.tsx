import CustomBottomTab from "@/components/common/CustomBottomTab";
import { MainTabsParamsList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tabs = createBottomTabNavigator<MainTabsParamsList>();

export default function TabLayout() {
  const inset = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
      tabBar={(props) => <CustomBottomTab {...props} />}
      safeAreaInsets={inset}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="messenger"
        options={{
          title: "Chat",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
