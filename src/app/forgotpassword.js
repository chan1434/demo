import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <Button title="Reset Password" onPress={() => alert("Password reset link sent!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20 },
});
