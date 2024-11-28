import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={() => router.push('/dashboard')} />
      <Button title="Forgot Password?" onPress={() => router.push('/ForgotPassword')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 16 },
});
