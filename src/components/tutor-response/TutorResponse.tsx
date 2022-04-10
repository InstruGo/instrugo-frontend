import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BsStarHalf, BsCheck2 } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';
import {
  ItemRow,
  ResponseContainer,
  ResponseItem,
  FieldDescription,
} from './styles';

export interface ResponseProps {
  index: number;
  firstName: string;
  lastName: string;
  avgRating?: number;
  price: number;
  timeslots: [any];
}

export const TutorResponse = ({
  index,
  firstName,
  lastName,
  avgRating,
  price,
  timeslots,
}: ResponseProps) => {
  const onAcceptClick = () => {};
  return (
    <>
      <ResponseContainer>
        <ResponseItem style={{ flexGrow: '0' }}>
          <CgProfile size={'32px'} />
        </ResponseItem>
        <ResponseItem style={{ flexGrow: '1' }}>
          <ItemRow>{firstName + ' ' + lastName}</ItemRow>
          <ItemRow>
            {avgRating + '/5'}
            {'  '}
            <div {...{ style: { padding: '0px 5px' } }}>
              <BsStarHalf />
            </div>
          </ItemRow>
        </ResponseItem>
        <ResponseItem>{price + ' kn/h'}</ResponseItem>
        <ResponseItem>
          <FieldDescription>
            <FormattedMessage id="newRequestForm.availableDates" />:{' '}
          </FieldDescription>

          {timeslots.map(
            (timeFrame: { startTime: string; endTime: string }) => {
              const start = new Date(timeFrame.startTime);
              const end = new Date(timeFrame.startTime);
              const idx = timeslots.indexOf(timeFrame);
              return (
                <FieldDescription key={idx}>
                  <ItemRow>
                    {`${start.getDate()}\/${start.getMonth()}\/${start.getFullYear()}`}
                  </ItemRow>
                  <ItemRow>
                    {`${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`}
                  </ItemRow>
                </FieldDescription>
              );
            }
          )}
        </ResponseItem>
        <ResponseItem style={{ flexGrow: '1' }}>
          <Button
            onClick={onAcceptClick}
            style={{
              backgroundColor: '#fff',
              color: '#26a644',
              boxShadow: '0px 0px 0px 0px',
              fontSize: '26px',
            }}
          >
            <BsCheck2 />
          </Button>
        </ResponseItem>
        <ResponseItem style={{ flexGrow: '1' }}>
          <Button
            onClick={onAcceptClick}
            style={{
              backgroundColor: '#fff',
              color: '#c93030',
              boxShadow: '0px 0px 0px 0px',
            }}
          >
            <ImCross />
          </Button>
        </ResponseItem>
      </ResponseContainer>
    </>
  );
};
