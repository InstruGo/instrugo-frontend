import type { NextPage } from 'next';
import Head from 'next/head';
import { TutorsNavbar, Lessons } from '@modules';

const TutorResponses: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>
      <TutorsNavbar />
      <Lessons title="responsesPage.title" cards respCards filter />
    </div>
  );
};

export default TutorResponses;
