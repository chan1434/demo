import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Link href="/signin" style={styles.link}>Sign In</Link>
      <Link href="/signup" style={styles.link}>Sign Up</Link>
      <Link href="/forgotpassword" style={styles.link}>Forgot Password?</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  link: { fontSize: 18, color: "blue", marginTop: 10 },
});
