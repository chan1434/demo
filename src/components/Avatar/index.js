import { Image, StyleSheet } from "react-native";

export default function Avatar({ source }) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: { width: 100, height: 100, borderRadius: 50 },
});
