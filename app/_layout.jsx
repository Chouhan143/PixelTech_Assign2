import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInpute from "../components/TextInpute";
import CustomBtn from "../components/CustomBtn";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    Alert.alert("Data submitted successfully ");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            source={require("../assets/images/userIcon.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.inputsContainer}>
          <TextInpute
            name="firstName"
            control={control}
            placeholder="First Name"
            errors={errors}
            rules={{ required: "First Name is required" }}
          />
          <TextInpute
            name="lastName"
            control={control}
            placeholder="Last Name"
            errors={errors}
            rules={{ required: "Last Name is required" }}
          />
          <TextInpute
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            errors={errors}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include a letter, a number, and a special character",
              },
            }}
          />
          <TextInpute
            name="email"
            control={control}
            placeholder="Email"
            errors={errors}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
          />
          <TextInpute
            name="mobileNo"
            control={control}
            placeholder="Mobile No."
            errors={errors}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid mobile number",
              },
            }}
          />
          <CustomBtn label="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#D7EAFA",
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#1A7DCA",
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  inputsContainer: {
    width: "95%",
  },
  errorSummary: {
    color: "red",
    marginTop: 20,
    fontSize: 14,
  },
});
