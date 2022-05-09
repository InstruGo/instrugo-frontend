import { useLayoutEffect, useRef, useState } from 'react';

import { BiFilter } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';

import { Button, Calendar, Dropdown } from '@components';
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

  const { subjectOptions, meetingTypeOptions, educationLevelOptions } =
    useAvailableFilterOptions();

  // Filter menu animation
  const { menuAnimation: filterMenuAnimation } = useMenuAnimation();

  useLayoutEffect(() => {
    filterMenuAnimation(filterMenuRef, isFilterMenuOpen);
  }, [filterMenuAnimation, isFilterMenuOpen]);

  const handleClearFilters = () => {
    setFilter('reset', 'all');
  };
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
        <div style={{ marginTop: '25px', alignItems: 'center' }}>
          <Button
            variant="secondary"
            style={{
              border: 'none',
              backgroundColor: 'inherit',
              boxShadow: 'none',
            }}
            onClick={handleClearFilters}
          >
            <ImCross style={{ width: '15px', paddingTop: '2px' }} />
          </Button>
        </div>
      </FilterMenuContainer>

      {filter.status !== 'pending' ? (
        <LessonsContainer filter={filter} />
      ) : (
        <>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            <FormattedMessage id="calendar.title" />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Calendar filter={filter} />
          </div>
        </>
      )}
    </div>
  );
};
