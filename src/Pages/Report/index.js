/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Picker, Button, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
    const currentBalance = 2064.35;

    const entriesGrouped = [
      {key: '1', description: 'Alimentação', amount: 251},
      {key: '2', description: 'Combustível', amount: 12},
      {key: '3', description: 'Aluguel', amount: 120},
      {key: '4', description: 'Lazer', amount: 250},
      {key: '5', description: 'Outros', amount: 300},
    ];

  const entries = [
          {key: '1', description: 'Padaria Asa Branca', amount: 10},
          {key: '2', description: 'Supermercado Isadora', amount: 191},
          {key: '3', description: 'Posto Ipiranga', amount: 292},
        ];

  return (
    <View>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker>
          <Picker.Item label="Todos Categorias" />
        </Picker>

        <Picker>
          <Picker.Item label="Todos 7 Dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped}/>
      <EntryList entries={entries}/>

      <View>
        <Button title="Salvar"/>
        <Button title="Fechar"/>
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Report;
