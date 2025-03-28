import React from "react";
import { Tabs } from "expo-router";
import { Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          shadowColor: "white",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 1,
          shadowRadius: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Leaf Buds",
          tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => 
            <Ionicons 
                name={focused ? "home-sharp" : "home-outline"} 
                size={24} 
                color="white" 
            />,
          title: "",
          
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "Leaf Buds",
          tabBarIcon: ({focused, color}) => 
            <Ionicons 
                name={focused ? "journal-sharp" : "journal-outline"} 
                size={24} 
                color="white" 
            />,
          title: "",
        }}
      />
    </Tabs>
  );
}
