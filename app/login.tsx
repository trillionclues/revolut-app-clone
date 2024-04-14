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
import { Ionicons } from "@expo/vector-icons";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberSelect = (
    phoneNumber: string,
    countryCode: string
  ) => {
    console.log("handlePhoneNumberSelect", phoneNumber, countryCode);
  };

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      console.log("onSignIn", phoneNumber);
    } else {
      console.log("====================================");
      console.log("onSignIn", type);
      console.log("====================================");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.header}>Welcome back!</Text>
          <Text style={defaultStyles.descriptionText}>
            Enter the phone number associated with your account.
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

          <TouchableOpacity
            onPress={() => onSignIn(SignInType.Phone)}
            style={[
              defaultStyles.pillButton,
              phoneNumber !== "" ? styles.enabled : styles.disabled,
              { marginBottom: 20 },
            ]}
          >
            <Text style={defaultStyles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
            <Text style={{ fontSize: 14, color: Colors.gray }}>OR</Text>
            <View
              style={{
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: Colors.gray,
              }}
            />
          </View>

          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            onPress={() => onSignIn(SignInType.Google)}
          >
            <Ionicons name="mail" size={24} color={Colors.primary} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            onPress={() => onSignIn(SignInType.Google)}
          >
            <Ionicons name="logo-google" size={24} color={Colors.primary} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              {
                flexDirection: "row",
                gap: 16,
                marginTop: 20,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            onPress={() => onSignIn(SignInType.Apple)}
          >
            <Ionicons name="logo-apple" size={24} color={Colors.primary} />
            <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
              Continue with Apple ID
            </Text>
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
