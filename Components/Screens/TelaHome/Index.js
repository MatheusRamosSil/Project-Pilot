import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView ,ScrollView} from 'react-native';

import styles from './Style'
import Header from '../../Header/Header'
import Carrossel from '../../Carrossel/Carrossel'
import SegundoCarrossel from '../../CarrosselMenor/CarrosselMenor'
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <Text style={styles.title}>Noticias Destaques</Text>
        <Carrossel/>
        <Text style={styles.title}>Últimas Noticias</Text>
        <SegundoCarrossel/>
        <Text style={styles.title}>Moda</Text>
        <SegundoCarrossel/>
        <Text style={styles.title}>esporte</Text>
        <SegundoCarrossel/>
      </ScrollView>

      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
