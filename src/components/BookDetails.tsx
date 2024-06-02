import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Author, Book } from '../types';
import Card from './Card';
import CardSection from './CardSection';
import DetailsModal from './DetailsModal';

const BookDetails = ({ book }: { book: Book }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bookDetails, setBookDetails] = useState(book);

  return (
    <>
      <Card>
        <View style={styles.contentSection}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <CardSection styles={[styles.sectionContainer, { marginBottom: 10 }]}>
            <Text style={styles.sectionTitle}>Title: {book.title}</Text>
          </CardSection>

          <CardSection
            styles={[
              styles.sectionContainer,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                flexDirection: 'column',
                width: '100%',
                alignItems: 'flex-start',
              },
            ]}>
            {book.authors &&
              book.authors.length > 0 &&
              book.authors.map((author: Author, i: number) => (
                <Text key={i} style={styles.cardSectionSubtitle}>
                  Author: {author.name}
                </Text>
              ))}
          </CardSection>
        </View>
        <View style={styles.imageSection}>
          <CardSection styles={styles.sectionContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image
                source={{ uri: book.formats?.['image/jpeg'] }}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: 150, height: 225 }}
              />
            </TouchableOpacity>
          </CardSection>
        </View>
      </Card>
      <DetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        book={bookDetails}
      />
    </>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  contentSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageSection: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 150,
    height: 225,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  cardSectionContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    position: 'relative',
  },
  cardSectionTitle: {
    flex: 1,
    fontSize: 20,
  },
  cardSectionSubtitle: {
    fontSize: 15,
    marginBottom: 10,
  },
});
