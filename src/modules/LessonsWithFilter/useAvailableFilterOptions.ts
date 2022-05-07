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

  const educationLevelOptions = [
    { key: 'all', value: intl.formatMessage({ id: 'educationLevel.all' }) },
    {
      key: 'elementary-school',
      value: intl.formatMessage({ id: 'educationLevel.elementary-school' }),
    },
    {
      key: 'high-school',
      value: intl.formatMessage({ id: 'educationLevel.high-school' }),
    },
    {
      key: 'university',
      value: intl.formatMessage({ id: 'educationLevel.university' }),
    },
  ];

  return {
    subjectOptions,
    meetingTypeOptions,
    educationLevelOptions,
  };
};
