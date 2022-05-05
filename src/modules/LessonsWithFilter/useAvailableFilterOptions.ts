import { useIntl } from 'react-intl';

import { useSubjects } from '@hooks';

export const useAvailableFilterOptions = () => {
  const intl = useIntl();

  const { data: subjects } = useSubjects();

  const subjectOptions = [
    { key: 'all', value: intl.formatMessage({ id: `subjects.all` }) },
    ...(subjects?.map((subject) => {
      return {
        key: `${subject.id}`,
        value: intl.formatMessage({ id: `subjects.${subject.name}` }),
      };
    }) || []),
  ];

  const meetingTypeOptions = [
    { key: 'all', value: intl.formatMessage({ id: 'meetingType.all' }) },
    {
      key: 'in-person',
      value: intl.formatMessage({ id: 'meetingType.in-person' }),
    },
    { key: 'online', value: intl.formatMessage({ id: 'meetingType.online' }) },
  ];

  return {
    subjectOptions,
    meetingTypeOptions,
  };
};
