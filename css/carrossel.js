import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const carrosselStyles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 20,
    height: 250,
  },
  carouselItem: {
    width: width - 40,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 20,
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carouselOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  carouselTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  carouselDescription: {
    fontSize: 14,
    color: 'white',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#007AFF',
    width: 20,
  },
  faithSection: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  faithTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  faithSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  faithImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  faithDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  highlightCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  highlightDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  contentContainer: {
    paddingBottom: 70,
  }
});