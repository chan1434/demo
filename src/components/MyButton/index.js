import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: '#007AFF', borderRadius: 5, marginVertical: 5 },
  text: { color: '#FFF', textAlign: 'center' },
});
