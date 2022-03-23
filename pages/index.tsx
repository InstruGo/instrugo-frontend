import type { NextPage } from 'next';
import Head from 'next/head';
import { useProfile, useUpcomingLessons, useUserContext } from '@hooks';

const Home: NextPage = () => {
  const { isLoading: isLoadingProfile } = useProfile();
  const { user } = useUserContext();
  const { data, isLoading: isLoadingLessons } = useUpcomingLessons();

  if (isLoadingProfile || isLoadingLessons) return <div>Loading...</div>;
  if (!user) return <div>No user data...</div>;
  if (!data) return <div>No lessons...</div>;

  return (
    <div>
      <Head>
        <title>
          InstruGo | Get help with math, physics, languages and more
        </title>
      </Head>

      <p>{user.firstName}</p>
      {data.map((lesson) => {
        return <div key={lesson.id}>{lesson.subfield}</div>;
      })}
    </div>
  );
};

export default Home;
