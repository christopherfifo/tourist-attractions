import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const circleSize = width * 0.7;

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderWidth: 4,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  ser: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
  },
  filho: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  bambi: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '300',
  },
});
