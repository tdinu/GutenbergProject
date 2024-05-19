import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const dummyData = [
  {
    id: 84,
    title: 'Frankenstein; Or, The Modern Prometheus',
    authors: [
      {
        name: 'Shelley, Mary Wollstonecraft',
      },
    ],
    bookshelves: ['Gothic Fiction'],
    formats: {
      'image/jpeg':
        'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg',
    },
  },
  {
    id: 1342,
    title: 'Pride and Prejudice',
    authors: [
      {
        name: 'Austen, Jane',
      },
    ],
    bookshelves: ['Harvard Classics'],
    formats: {
      'image/jpeg':
        'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg',
    },
  },
  {
    id: 2701,
    title: 'Moby Dick; Or, The Whale',
    authors: [
      {
        name: 'Melville, Herman',
      },
    ],
    bookshelves: ['Best Books Ever Listings'],
    formats: {
      'image/jpeg':
        'https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg',
    },
  },
  {
    id: 1259,
    title: 'Twenty years after',
    authors: [
      {
        name: 'Dumas, Alexandre',
      },
      {
        name: 'Maquet, Auguste',
      },
    ],
    bookshelves: ['Adventure', 'Historical Fiction', 'Movie Books'],
    formats: {
      'image/jpeg':
        'https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg',
    },
  },
];

const BookList = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState<unknown>();

  useEffect(() => {
    setIsLoading(false);

    (async () => {
      try {
        const success = await getMockData(
          [...dummyData],
          'unknown server error',
          500,
        );
        setResponse(success.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
      try {
        const error = await getMockData('', '404 not found error', 3000);
        console.log(error);
        setError(error);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    })();
  }, []);

  const getMockData = async (
    data = '',
    error = 'unknown server error',
    delay,
  ) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve({
            type: 'Success',
            data,
          });
        } else {
          reject({
            type: 'Error',
            message: error,
          });
        }
      }, delay || 1000);
    });
  };

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    if (response) {
      return (response as unknown[]).map((book: unknown) => (
        <Text key={book.id}>{book.title}</Text>
      ));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books List</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.content}>
        {getContent()}
      </ScrollView>
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    marginLeft: 10,
  },
  content: {
    marginBottom: 10,
  },
});
