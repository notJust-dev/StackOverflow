import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router';
import questions from '../data/questions';
import QuestionHeader from '../src/components/QuestionHeader';

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();

  const question = questions.items.find((q) => q.question_id == id);

  if (!question) {
    return <Text>Question not found</Text>;
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <QuestionHeader question={question} />
    </View>
  );
};

export default QuestionDetailsPage;
