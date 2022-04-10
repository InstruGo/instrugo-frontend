import type { NextPage } from 'next';
import Head from 'next/head';
import { StudentsNavbar, LessonsContainer } from '@modules';

const Requestspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student requests</title>
      </Head>

      <StudentsNavbar />
      <LessonsContainer title="My requests" />
    </div>
  );
};

export default Requestspage;
