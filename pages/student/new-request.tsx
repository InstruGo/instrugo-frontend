import type { NextPage } from 'next';
import Head from 'next/head';
import { StudentsNavbar, NewRequestForm } from '@modules';
import { useRouter } from 'next/router';

const Requestspage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>InstruGo | New request</title>
      </Head>

      <StudentsNavbar />
      <NewRequestForm onFinish={() => router.push('/student/home')} />
    </div>
  );
};

export default Requestspage;
