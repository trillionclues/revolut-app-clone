import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import countryData from "@/assets/data/countries.json";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Country, PhoneNumberInputProps } from "../types/CountryData";

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onPhoneNumberChange,
  errors,
  setCode,
  setNumber,
  number,
  code,
}) => {
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch country data from JSON file
    setCountries(countryData);
  }, []);

  const handlePhoneNumberChange = (number: string) => {
    setCode(number);
    onPhoneNumberChange(number, code);
  };

  const selectCountryCode = (code: string) => {
    setCode(code);
    onPhoneNumberChange(number, code);
    setShowCountryPicker(false);
  };

  const filteredCountryData = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <View style={styles.textInputContainer}>
        <TouchableOpacity
          onPress={() => setShowCountryPicker(true)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.countryCodeContainer}>
            <Text style={{ fontSize: 20 }}>
              {countries.find((country) => country.dial_code === code)?.flag}
            </Text>
            <Text style={{ fontSize: 20, color: Colors.gray }}>{code}</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>
      {!!errors && (
        <View>
          <Text style={{ color: "red", fontSize: 14 }}>{errors}</Text>
        </View>
      )}

      <Modal visible={showCountryPicker} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.itemContainer}>
            <TextInput
              placeholder="Enter country name..."
              style={styles.itemSearchInput}
              onChangeText={setSearchText}
              value={searchText}
            />
            <TouchableOpacity onPress={() => setShowCountryPicker(false)}>
              <FontAwesome5 name="times" size={22} color={Colors.gray} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredCountryData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onPhoneNumberChange(number, item.dial_code);
                  selectCountryCode(item.dial_code);
                }}
              >
                <View style={[styles.itemSelectionContainer, {}]}>
                  <Text
                    style={{
                      color: Colors.gray,
                    }}
                  >{`${item.flag} ${item.name} (${item.dial_code})`}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.dial_code + index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {},
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  phoneNumberInput: {
    borderColor: Colors.gray,
    padding: 6,
    width: "75%",
  },
  modalContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 50,
    gap: 18,
  },
  itemSearchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingVertical: 14,
    borderRadius: 6,
    padding: 6,
  },
  itemSelectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
