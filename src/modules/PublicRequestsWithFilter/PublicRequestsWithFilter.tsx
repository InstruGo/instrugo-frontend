import { FormattedMessage } from 'react-intl';

import { Dropdown } from '@components';
import { useLessonFilter } from '@hooks';
import { useAvailableFilterOptions } from '@modules/LessonsWithFilter/useAvailableFilterOptions';
import { PublicRequestsContainer } from '@modules/PublicRequestsContainer/PublicRequestsContainer';

import { FilterGroup, FilterMenuContainer } from './styles';

export const PublicRequestsWithFilter = () => {
  // This filter stores the current filter state and provides a setter
  const { filter, setFilter } = useLessonFilter({ status: 'pending' });

  const { subjectOptions, meetingTypeOptions, educationLevelOptions } =
    useAvailableFilterOptions();

  return (
    <div>
      <FilterMenuContainer>
        <FilterGroup>
          <div>
            <FormattedMessage id="filter.subjects" />:
          </div>
          <Dropdown
            options={subjectOptions}
            onOptionSelect={(value: string) => setFilter('subjectIds', value)}
          />
        </FilterGroup>

        <FilterGroup>
          <div>
            <FormattedMessage id="lessons.titles.meetingType" />:
          </div>
          <Dropdown
            options={meetingTypeOptions}
            onOptionSelect={(value: string) => setFilter('type', value)}
          />
        </FilterGroup>

        <FilterGroup>
          <div>
            <FormattedMessage id="lessons.titles.educationLevel" />:
          </div>
          <Dropdown
            options={educationLevelOptions}
            onOptionSelect={(value: string) =>
              setFilter('educationLevel', value)
            }
          />
        </FilterGroup>
      </FilterMenuContainer>

      <PublicRequestsContainer filter={filter} />
    </div>
  );
};
