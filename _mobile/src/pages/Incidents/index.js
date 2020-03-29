import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo seja um heroí e salve o dia.</Text>

      {/* <View style={styles.IncidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APA</Text>
          
          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>AlALALALALLAA</Text>
          
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => {}}
      >
        <Text style={styles.detailButtonText}>
          Ver mais detalhes
        </Text>
        <Feather name="arrow-rigth" size={16} color="#E02041" />
  </TouchableOpacity> */}
    
    </View>
  );
}