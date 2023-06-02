import { useNavigation } from 'expo-router';
import { useState, useLayoutEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'urql';
import { searchQuery } from '../src/graphql/queries';
import QuestionListItem from '../src/components/QuestionListItem';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [result, fetch] = useQuery({
    query: searchQuery,
    pause: true,
    variables: { term: searchTerm },
  });

  const navigation = useNavigation();

  const search = () => {
    fetch();
    console.warn('Search: ', searchTerm);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
        onBlur: search,
      },
    });
  }, [navigation, searchTerm, setSearchTerm]);

  if (result.fetching) {
    return <ActivityIndicator />;
  }

  if (result.error) {
    return <Text>Error: {result.error.message}</Text>;
  }

  if (!result.data) {
    return <Text>Search for a question</Text>;
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={result.data.search.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
};

export default Search;
