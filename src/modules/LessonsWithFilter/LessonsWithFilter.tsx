import { useLayoutEffect, useRef, useState } from 'react';

import { BiFilter } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import { Button, Dropdown } from '@components';
import { useLessonFilter, useMenuAnimation } from '@hooks';
import { LessonsContainer, NewRequestButton } from '@modules';

import {
  ControlPanel,
  FilterButtonStyles,
  FilterGroup,
  FilterMenuContainer,
  NewRequestButtonContainer,
} from './styles';
import { useAvailableFilterOptions } from './useAvailableFilterOptions';

export const LessonsWithFilter = () => {
  // This filter stores the current filter state and provides a setter
  const { filter, setFilter } = useLessonFilter({ status: 'pending' });

  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

  const { subjectOptions, meetingTypeOptions } = useAvailableFilterOptions();

  // Filter menu animation
  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterMenuOpen);
  }, [filterMenuAnimation, isFilterMenuOpen]);

  return (
    <div>
      <ControlPanel>
        <Button
          variant={filter.status === 'pending' ? 'primary' : 'secondary'}
          onClick={() => setFilter('status', 'pending')}
        >
          <FormattedMessage id="lessons.upcoming" />
        </Button>

        <Button
          variant={filter.status === 'requested' ? 'primary' : 'secondary'}
          onClick={() => setFilter('status', 'requested')}
        >
          <FormattedMessage id="lessons.requests" />
        </Button>

        <Button
          variant={filter.status === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('status', 'completed')}
        >
          <FormattedMessage id="lessons.recentlyFinished" />
        </Button>

        <Button
          style={FilterButtonStyles}
          onClick={() => setFilterMenuOpen(!isFilterMenuOpen)}
        >
          <BiFilter size="20px" />
          <div>
            <FormattedMessage id="filter" />
          </div>
        </Button>

        <NewRequestButtonContainer>
          <NewRequestButton />
        </NewRequestButtonContainer>
      </ControlPanel>

      <FilterMenuContainer ref={filterMenuRef}>
        <FilterGroup>
          <div>
            <FormattedMessage id="filter.subjects" />
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
      </FilterMenuContainer>

      <LessonsContainer filter={filter} />
    </div>
  );
};
