import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Moviments from '../../componentes/Moviments';
import Action from '../../componentes/Action';

import { FontAwesome5 } from '@expo/vector-icons'; 

const list = [
  {
    id: 1,
    label: 'Boleto De Luz',
    value: '156,98',
    date: '04/06/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Boleto De Água',
    value: '156,98',
    date: '04/06/2023',
    type: 0 // despesas
  },
  {
    id: 3,
    label: 'Boleto Bancário',
    value: '234,98',
    date: '04/06/2023',
    type: 0 // despesas
  },
  {
    id: 4,
    label: 'Pix Cliente X',
    value: '255,00',
    date: '07/06/2023',
    type: 1 // entradas
  },
  {
    id: 5,
    label: 'Pix Cliente Y',
    value: '255,00',
    date: '07/06/2023',
    type: 1 // entradas
  },
  {
    id: 6,
    label: 'Pix Salário',
    value: '5.500,00',
    date: '05/06/2023',
    type: 1 // entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="c4id3n"/>

      <Balance saldo="9.324,90" gastos="-234,75"/>
      
      <Action/>

      <Text style={styles.title}>Últimas movimentações</Text>
    
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item}/>}
      />
      
      <FontAwesome5 style={styles.copyright} name="copyright" size={20} color="gray" />
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/c4id3nSecurity/')}>
        <Text style={styles.copytext}>https://github.com/c4id3nSecurity/</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e4e4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  copyright: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  copytext: {
    fontSize: 14,
    color: '#595959',
    fontWeight: 'bold',
    marginLeft: 25,
  },
});

