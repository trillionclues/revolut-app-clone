export interface Country {
  name: string;
  dial_code: string;
  flag: string;
}

export interface PhoneNumberInputProps {
  onPhoneNumberChange: (phoneNumber: string, countryCode: string) => void;
  errors?: string | undefined;
}
