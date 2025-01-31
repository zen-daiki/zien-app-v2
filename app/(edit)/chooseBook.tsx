import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const SquareImage = require('@/assets/images/chooseBook_01.png');
const RectangleImage = require('@/assets/images/chooseBook_02.png');

type BookSize = {
  id: string;
  type: 'vertical' | 'square' | 'horizontal';
  title: string;
  size: string;
  price: string;
  image: any;
};

const BOOK_SIZES: BookSize[] = [
  {
    id: '1',
    type: 'vertical',
    title: 'たてなが',
    size: '102×102mm',
    price: '1,360円(税込)より',
    image: SquareImage,
  },
  {
    id: '2',
    type: 'square',
    title: 'ましかく',
    size: '102×102mm',
    price: '1,360円(税込)より',
    image: SquareImage,
  },
  {
    id: '3',
    type: 'horizontal',
    title: 'よこなが',
    size: '102×152mm',
    price: '1,750円(税込)より',
    image: RectangleImage,
  },
];

export default function ChooseBookScreen() {
  const handleChooseSize = (size: BookSize['type']) => {
    router.push({
      pathname: '/(edit)/chooseCover',
      params: { size }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>サイズ選択</Text>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {BOOK_SIZES.map((book, index) => (
            <Pressable
              key={book.id}
              style={[
                styles.option,
                index > 0 && styles.middleOption,
                index === BOOK_SIZES.length - 1 && styles.lastOption,
              ]}
              onPress={() => handleChooseSize(book.type)}
            >
              <Image source={book.image} style={styles.image} resizeMode="cover" />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.size}>{book.size}</Text>
                <Text style={styles.price}>{book.price}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  option: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  middleOption: {
    marginTop: 16,
  },
  lastOption: {
    marginTop: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  size: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
});
