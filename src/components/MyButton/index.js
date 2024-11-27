import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: "#007BFF", borderRadius: 5, alignItems: "center" },
  text: { color: "#fff", fontSize: 16 },
});
