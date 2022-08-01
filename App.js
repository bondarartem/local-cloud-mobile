import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const onClick = () => {
    console.log('hello');
  }

  return (
    <View style={styles.container}>
        <Text>Я уже почти четыре</Text>
      <Button onPress={onClick} title={'Нажми, чтобы показать оповещение'} />
      <StatusBar style="auto" translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
});
