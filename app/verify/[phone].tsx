import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();

  return <Text>Page</Text>;
};

export default Page;
