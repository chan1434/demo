import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "expo-router";

export default function Profile() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    signOut(); // Clear user context
    router.push("/signin"); // Redirect to sign-in
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
