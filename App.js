import { StyleSheet, View } from "react-native";
import Index from './src/index';

export default function App() {
 
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#101011',
    alignItems: 'center',
    justifyContent: 'center',
  }
})