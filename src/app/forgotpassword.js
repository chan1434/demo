import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />
      <Button title="Submit" onPress={() => alert('Reset link sent!')} />
      <Button title="Back to Sign In" onPress={() => router.push('/Signin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 16 },
});
