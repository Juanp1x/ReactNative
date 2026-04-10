import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { obtenerPaises } from './api/paises';
import BuscadorIdioma from './BuscadorIdioma';

export default function App() {
  const [pantalla, setPantalla] = useState("todos");
  const [paises, setPaises] = useState([]);


  useEffect(() => {
    const cargarDatos = async () => {
      const data = await obtenerPaises();
      setPaises(data);
    };

    cargarDatos();
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
        <TouchableOpacity onPress={() => setPantalla("idioma")}>
          <Text style={[styles.navItem, pantalla === "idioma" && styles.activo]}>
            Idioma
          </Text>
        </TouchableOpacity>

      </View>

      {/* LISTA */}
      {pantalla !== "idioma" && (
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
      )}
    {pantalla === "idioma" && <BuscadorIdioma paises={paises} />}
    </View>
  );
}