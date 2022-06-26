import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

export interface ILesson {
  id: string;
  title: string;
}

export const App = () => {
  const { data } = useQuery<{ lessons: Array<ILesson> }>(GET_LESSONS_QUERY);

  console.log({ data });

  return (
    <ul>
      {data?.lessons?.map((lesson) => <li key={lesson.id}>{lesson.title}</li>)}
    </ul>
  );
}
