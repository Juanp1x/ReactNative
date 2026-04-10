import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [pantalla, setPantalla] = useState("todos");
  const [paises, setPaises] = useState([]);

  // API
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,region,cca3')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPaises(data);
        } else {
          setPaises([]);
        }
      })
      .catch(error => {
        console.log(error);
        setPaises([]);
      });
  }, []);

  // FILTROS
  const america = paises.filter(p => p.region === "Americas");
  const europa = paises.filter(p => p.region === "Europe");
  const asia = paises.filter(p => p.region === "Asia");
  const oceania = paises.filter(p => p.region === "Oceania");

  return (
    <View style={{ flex: 1 }}>

      {/* NAVBAR */}
      <View style={styles.navbar}>

        <TouchableOpacity onPress={() => setPantalla("todos")}>
          <Text style={[styles.navItem, pantalla === "todos" && styles.activo]}>
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPantalla("america")}>
          <Text style={[styles.navItem, pantalla === "america" && styles.activo]}>
            América
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPantalla("europa")}>
          <Text style={[styles.navItem, pantalla === "europa" && styles.activo]}>
            Europa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPantalla("asia")}>
          <Text style={[styles.navItem, pantalla === "asia" && styles.activo]}>
            Asia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPantalla("oceania")}>
          <Text style={[styles.navItem, pantalla === "oceania" && styles.activo]}>
            Oceanía
          </Text>
        </TouchableOpacity>

      </View>

      {/*LISTA */}
      <FlatList
        style={{ flex: 1 }}
        data={
          pantalla === "todos" ? paises :
          pantalla === "america" ? america :
          pantalla === "europa" ? europa :
          pantalla === "asia" ? asia :
          pantalla === "oceania" ? oceania : []
        }
        keyExtractor={(item, index) => item.cca3 || index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item?.name?.common}
          </Text>
        )}
      />

    </View>
  );
}