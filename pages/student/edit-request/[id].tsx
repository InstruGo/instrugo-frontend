import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Loader } from '@components';
import { useLesson } from '@hooks';
import { Navbar, UpdateRequestForm } from '@modules';

const EditRequestPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;

  const id = Number(query.id);
  const { data, isLoading } = useLesson(id);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>InstruGo | Request details</title>
      </Head>

      <Navbar />
      <UpdateRequestForm
        onFinish={() => router.push('/student/requests')}
        lessonData={data}
      />
    </div>
  );
};

export default EditRequestPage;
