import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Drawer({ items, onItemSelect }) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => onItemSelect(item)}>
          <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f8f8" },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
  itemText: { fontSize: 18 },
});
