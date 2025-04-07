import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/signin"); // Force navigation to "signin"
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}