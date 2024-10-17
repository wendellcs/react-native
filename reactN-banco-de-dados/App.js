import { Text, View, ScrollView } from 'react-native';
import AsyncStorageExample from './Components/AsyncStorageExample';
import DexieExample from './Components/DexieExample';

export default function App() {
  return (
    <ScrollView>
      <DexieExample />
    </ScrollView>
  );
}

