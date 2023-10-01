import { StyleSheet } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { Text, View } from '../../components/Themed';

export default function JobsScreen() {
  const { isLoaded, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs</Text>
      <Text
        onPress={() => signOut()}
        style={{ marginTop: 'auto', margin: 10, fontSize: 20, color: 'red' }}
      >
        Sign Out
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
