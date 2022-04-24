import { useRouter } from 'next/router';
import React from 'react';

import { BsStarHalf, BsCheck2 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { ImCross } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';

import { Button } from '@components';
import { useResolveLesson } from '@hooks';

import {
  ItemRow,
  ResponseContainer,
  ResponseItem,
  FieldDescription,
  StyledHr,
} from './styles';
import { TimeFrame } from '@types';

export interface ResponseProps {
  index: number;
  lessonId: number;
  firstName: string;
  lastName: string;
  avgRating?: number;
  price: number;
  timeFrame: TimeFrame;
}

export const TutorResponse = ({
  index,
  lessonId,
  firstName,
  lastName,
  avgRating,
  price,
  timeFrame,
}: ResponseProps) => {
  const acceptResponse = useResolveLesson(lessonId);
  const router = useRouter();
  const onAcceptClick = async () => {
    await acceptResponse.mutate(index);
    router.push('/student/home');
  };
  const start = new Date(timeFrame.startTime);
  const end = new Date(timeFrame.endTime);
  return (
    <>
      <ResponseContainer>
        <ResponseItem style={{ flexGrow: '0' }}>
          <CgProfile size={'32px'} />
        </ResponseItem>
        <ResponseItem style={{ flexGrow: '1' }}>
          <ItemRow>{firstName + ' ' + lastName}</ItemRow>
          {avgRating && (
            <ItemRow>
              {avgRating + '/5'}
              {'  '}
              <div {...{ style: { padding: '0px 5px' } }}>
                <BsStarHalf />
              </div>
            </ItemRow>
          )}
        </ResponseItem>
        <ResponseItem>
          <FieldDescription>Price: {'    ' + price + ' kn/h'}</FieldDescription>
        </ResponseItem>
        <ResponseItem>
          <FieldDescription>
            <FormattedMessage id="newRequestForm.availableDates" />:{' '}
          </FieldDescription>
        </ResponseItem>
        <ResponseItem style={{ justifyContent: 'flex-start' }}>
          <FieldDescription style={{ justifyContent: 'left' }}>
            <ItemRow>
              {`${start.getDate()}\/${start.getMonth()}\/${start.getFullYear()}`}
            </ItemRow>
            <ItemRow>
              {`${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`}
            </ItemRow>
          </FieldDescription>
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
      <StyledHr />
    </>
  );
};
