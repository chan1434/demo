import { View, Image, StyleSheet } from 'react-native';

export default function Avatar({ size = 100, source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={{ ...styles.image, width: size, height: size }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  image: { borderRadius: 50, resizeMode: 'cover' },
});
