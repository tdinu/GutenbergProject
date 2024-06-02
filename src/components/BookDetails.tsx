import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Book } from '../types';
import Card from './Card';

const BookDetails = ({ book }: { book: Book }) => {
  return (
    <Card>
      <View>
        <Text style={styles.sectionTitle}> Title: {book.title}</Text>
      </View>
    </Card>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
