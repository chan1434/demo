import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/MyProfile.png')} style={styles.image} />
      <Text style={styles.text}>Welcome to your Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 50 },
  text: { marginTop: 20, fontSize: 18 },
});
