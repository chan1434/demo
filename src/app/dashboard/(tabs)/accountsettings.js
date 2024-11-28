import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccountSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Settings</Text>
      <Button title="Change Password" onPress={() => alert('Change Password Pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
});
