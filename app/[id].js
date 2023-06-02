import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useSearchParams } from 'expo-router';
import QuestionHeader from '../src/components/QuestionHeader';

import AnswerListItem from '../src/components/AnswerListItem';
import { useQuery } from 'urql';
import { getQuestionQuery } from '../src/graphql/queries';

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();

  const [response] = useQuery({
    query: getQuestionQuery,
    variables: { id },
  });

  if (response.fetching) {
    return <ActivityIndicator />;
  }

  if (response.error) {
    return <Text>Error: {response.error.message}</Text>;
  }

  const question = response.data.question.items[0];

  if (!question) {
    return <Text>Question not found</Text>;
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={question.answers}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};

export default QuestionDetailsPage;
