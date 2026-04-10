import { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default function BuscadorIdioma({ paises }) {
  const [busqueda, setBusqueda] = useState('');

  const resultados = paises.filter(p => {
    if (!p.languages) return false;
    const idiomas = Object.values(p.languages).map(l => l.toLowerCase());
    return idiomas.some(l => l.includes(busqueda.toLowerCase()));
  });

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.titulo}>🌐 Buscar por Idioma</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Spanish, French, Portuguese..."
        value={busqueda}
        onChangeText={setBusqueda}
      />
      {busqueda.length > 0 && (
        <Text style={styles.conteo}>{resultados.length} país(es) encontrado(s)</Text>
      )}
      <FlatList
        data={busqueda.length > 0 ? resultados : []}
        keyExtractor={(item, index) => item.cca3 || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.bandera}>{item.flag}</Text>
            <View>
              <Text style={styles.nombre}>{item.name.common}</Text>
              <Text style={styles.detalle}>
                🗣️ {Object.values(item.languages || {}).join(', ')}
              </Text>
              <Text style={styles.detalle}>
                🏙️ {item.capital?.[0] || 'N/A'}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}