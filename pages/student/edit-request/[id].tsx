import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { StudentsNavbar, UpdateRequestForm } from '@modules';
import { useLesson } from '@hooks';

const EditRequestPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = Number(query.id);
  const { data, isLoading } = useLesson(id);
  if (isLoading || !data) return <div>Loading...</div>;
  return (
    <div>
      <Head>
        <title>InstruGo | Request details</title>
      </Head>

      <StudentsNavbar />
      <UpdateRequestForm
        onFinish={() => router.push('/student/requests')}
        lessonData={data}
      />
    </div>
  );
};

export default EditRequestPage;
