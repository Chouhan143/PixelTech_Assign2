import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const TextInpute = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  errors,
  rules,
}) => {
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              style={styles.textInput}
            />
            {errors[name] && (
              <Text style={styles.errorText}>{errors[name].message}</Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default TextInpute;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    width: "95%",
    borderWidth: 2,
    borderColor: "#1A7DCA",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
