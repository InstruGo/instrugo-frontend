import type { NextPage } from 'next';
import Head from 'next/head';
import { TutorsNavbar, LessonsContainer } from '@modules';

const TutorResponses: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>
      <TutorsNavbar />
      <LessonsContainer title="responsesPage.title" respCards filter />
    </div>
  );
};

export default TutorResponses;
