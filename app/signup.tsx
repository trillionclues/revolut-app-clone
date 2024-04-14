import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { PhoneNumberInput } from "./components/PhoneNumberInput";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberSelect = (
    phoneNumber: string,
    countryCode: string
  ) => {
    console.log("handlePhoneNumberSelect", phoneNumber, countryCode);
  };

  const onSignUp = async () => {
    console.log("onSignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Let's get started!</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter your phone number. We will send you a confirmation code.
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <PhoneNumberInput onPhoneNumberChange={handlePhoneNumberSelect} />
            </View>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Mobile Number"
              placeholderTextColor={Colors.gray}
              keyboardType="numeric"
              // autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <Link href={"/login"} replace asChild>
            <TouchableOpacity>
              <Text style={defaultStyles.textLink}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </Link>

          <View style={{ flex: 1 }}></View>
          <TouchableOpacity
            onPress={onSignUp}
            style={[
              defaultStyles.pillButton,
              phoneNumber !== "" ? styles.enabled : styles.disabled,
              { marginBottom: 20 },
            ]}
          >
            <Text style={defaultStyles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page;
