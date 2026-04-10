import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2196F3',
    paddingTop: 40,
    paddingBottom: 15,
    elevation: 5,
    flexWrap: 'wrap'
  },

  navItem: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },

  activo: {
    borderBottomWidth: 3,
    borderColor: 'white',
    paddingBottom: 5
  },

  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
});