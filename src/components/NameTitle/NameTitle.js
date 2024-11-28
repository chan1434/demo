import { View, Text, StyleSheet } from 'react-native';

export default function NameTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
