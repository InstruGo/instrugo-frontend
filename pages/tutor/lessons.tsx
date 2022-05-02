import type { NextPage } from 'next';
import Head from 'next/head';

import { TutorsNavbar, Lessons } from '@modules';

const Lessonspage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstruGo | Tutor lessons</title>
      </Head>
      <TutorsNavbar />
      <Lessons title="lessons.1st_group" cards={true} />
      <Lessons title="lessons.2nd_group" cards={true} />
      <Lessons title="lessons.3rd_group" cards={true} />

      <Lessons title="lessons.table" table={true} />
    </div>
  );
};

export default Lessonspage;
