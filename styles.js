import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2196F3',
    paddingTop: 40,
    paddingBottom: 15,
    elevation: 5
  },

  navItem: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingBottom: 5
  },

  activo: {
    borderBottomWidth: 3,
    borderColor: 'white',
    color: '#FFD700'
  },

  item: {
    fontSize: 18,
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    borderBottomWidth: 0
  },
  
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  conteo: {
    color: '#666',
    marginBottom: 8
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 8
  },
  bandera: {
    fontSize: 32
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalle: {
    fontSize: 13,
    color: '#555'
  }
});
