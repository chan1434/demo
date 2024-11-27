import { View, Text, StyleSheet } from "react-native";

export default function NameTitle({ name, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginVertical: 10 },
  name: { fontSize: 20, fontWeight: "bold" },
  title: { fontSize: 16, color: "#666" },
});
