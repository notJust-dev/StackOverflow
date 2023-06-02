import { gql } from 'urql';

export const questionsQuery = gql`
  query MyQuery($sort: QuestionSort!) {
    questions(sort: $sort) {
      items {
        answer_count
        body_markdown
        creation_date
        question_id
        score
        tags
        title
        view_count
      }
    }
  }
`;

export const getQuestionQuery = gql`
  query GetQuestion($id: Int!) {
    question(questionId: $id) {
      has_more
      quota_max
      quota_remaining
      items {
        title
        answer_count
        body_markdown
        creation_date
        is_answered
        link
        question_id
        score
        tags
        view_count
        answers {
          body_markdown
          score
          answer_id
          creation_date
          is_accepted
          question_id
        }
      }
    }
  }
`;

export const searchQuery = gql`
  query MyQuery($term: String!) {
    search(term: $term) {
      items {
        answer_count
        body_markdown
        creation_date
        question_id
        score
        tags
        title
        view_count
      }
    }
  }
`;
