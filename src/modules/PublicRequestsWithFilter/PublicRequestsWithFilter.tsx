import { FormattedMessage } from 'react-intl';
import { ImCross } from 'react-icons/im';

import { Dropdown, Button } from '@components';
import { useLessonFilter } from '@hooks';
import { useAvailableFilterOptions } from '@modules/LessonsWithFilter/useAvailableFilterOptions';
import { PublicRequestsContainer } from '@modules/PublicRequestsContainer/PublicRequestsContainer';

import { BudgetItem, FilterGroup, FilterMenuContainer } from './styles';

export const PublicRequestsWithFilter = () => {
  // This filter stores the current filter state and provides a setter
  const { filter, setFilter } = useLessonFilter({ status: 'pending' });

  const { subjectOptions, meetingTypeOptions, educationLevelOptions } =
    useAvailableFilterOptions();
  const handleClearFilters = () => {
    setFilter('reset', 'all');
  };
  console.log(filter);
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
            selectedOption={
              filter.subjectIds ? filter.subjectIds[0].toString() : undefined
            }
          />
        </FilterGroup>

        <FilterGroup>
          <div>
            <FormattedMessage id="lessons.titles.meetingType" />:
          </div>
          <Dropdown
            options={meetingTypeOptions}
            onOptionSelect={(value: string) => setFilter('type', value)}
            selectedOption={filter.type}
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
            selectedOption={filter.educationLevel}
          />
        </FilterGroup>

        <FilterGroup>
          <div>
            <FormattedMessage id="newRequestForm.budget" />:
          </div>

          <div>
            <BudgetItem>
              <div>
                <FormattedMessage id="filter.budgetFrom" />:
              </div>
              <div>
                <input
                  type="number"
                  style={{ width: '70px' }}
                  value={filter.minBudget ? filter.minBudget : ''}
                  onChange={(e) => setFilter('minBudget', e.target.value)}
                />{' '}
                kn/h
              </div>
            </BudgetItem>

            <BudgetItem style={{ marginTop: '5px' }}>
              <div>
                <FormattedMessage id="filter.budgetTo" />:
              </div>
              <div>
                <input
                  type="number"
                  style={{ width: '70px' }}
                  value={filter.maxBudget ? filter.maxBudget : ''}
                  onChange={(e) => setFilter('maxBudget', e.target.value)}
                />{' '}
                kn/h
              </div>
            </BudgetItem>
          </div>
        </FilterGroup>

        <FilterGroup>
          <div>
            <FormattedMessage id="newRequestForm.duration" />:
          </div>

          <div>
            <BudgetItem>
              <div>
                <FormattedMessage id="filter.budgetFrom" />:
              </div>
              <div>
                <input
                  type="number"
                  style={{ width: '70px' }}
                  value={filter.minDuration ? filter.minDuration : ''}
                  onChange={(e) => setFilter('minDuration', e.target.value)}
                />{' '}
                min
              </div>
            </BudgetItem>

            <BudgetItem style={{ marginTop: '5px' }}>
              <div>
                <FormattedMessage id="filter.budgetTo" />:
              </div>
              <div>
                <input
                  type="number"
                  style={{ width: '70px' }}
                  value={filter.maxDuration ? filter.maxDuration : ''}
                  onChange={(e) => setFilter('maxDuration', e.target.value)}
                />{' '}
                min
              </div>
            </BudgetItem>
          </div>
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

      <PublicRequestsContainer filter={filter} />
    </div>
  );
};
