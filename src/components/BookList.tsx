import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import BookDetails from './BookDetails';
import axios from 'axios';

const BookList = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState<string | null>(null);
  let [response, setResponse] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const success = await axios.get('https://gutendex.com/books');
        setResponse(success.data.results);
      } catch (err) {
        const { message } = err as Error;
        setError(message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    if (response) {
      return (response as Book[]).map((book: Book) => (
        <BookDetails book={book} key={book.id} />
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
