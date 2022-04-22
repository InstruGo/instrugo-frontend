import type { NextPage } from 'next';
import Head from 'next/head';
import { StudentsNavbar, LessonsContainer } from '@modules';

const Lessonspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Student lessons</title>
      </Head>
      <StudentsNavbar />
      <LessonsContainer title="lessons.1st_group" cards={true} />
      <LessonsContainer title="lessons.2nd_group" cards={true} />
      <LessonsContainer title="lessons.3rd_group" cards={true} />

      <LessonsContainer title="lessons.table" table={true} />
    </div>
  );
};

export default Lessonspage;
