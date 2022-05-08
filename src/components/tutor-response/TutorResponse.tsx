import { useRouter } from 'next/router';
import React from 'react';

import { BsStarHalf, BsCheck2 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { ImCross } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';

import { Button, Modal } from '@components';
import { useResolveLesson } from '@hooks';
import { LessonDetailsPayment } from '@modules';
import { TimeFrame } from '@types';

import {
  ItemRow,
  ResponseContainer,
  ResponseItem,
  FieldDescription,
  StyledHr,
} from './styles';

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
  const start = new Date(timeFrame.startTime);
  const end = new Date(timeFrame.endTime);
  const startMinutes =
    start.getMinutes() < 10 ? '0' + start.getMinutes() : start.getMinutes();
  const startHours =
    start.getHours() < 10 ? '0' + start.getHours() : start.getHours();
  const endMinutes =
    end.getMinutes() < 10 ? '0' + end.getMinutes() : end.getMinutes();
  const endHours = end.getHours() < 10 ? '0' + end.getHours() : end.getHours();
  const [showLessonPaymentModal, setLessonPaymentModal] = React.useState(false);

  return (
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
            {`${start.getDate()}\/${
              start.getMonth() + 1
            }\/${start.getFullYear()}`}
          </ItemRow>

          <ItemRow>
            {`${startHours}:${startMinutes} - ${endHours}:${endMinutes}`}
          </ItemRow>
        </FieldDescription>
      </ResponseItem>

      <ResponseItem>
        <Button
          onClick={() => setLessonPaymentModal(true)}
          style={{
            backgroundColor: '#fff',
            color: '#26a644',
            boxShadow: '0px 0px 0px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7px',
          }}
        >
          <BsCheck2 size="25px" strokeWidth="1px" />
        </Button>
      </ResponseItem>

      <Modal
        shouldShow={showLessonPaymentModal}
        closeAction={() => setLessonPaymentModal(false)}
      >
        <LessonDetailsPayment id={lessonId} responseId={index} />
      </Modal>
    </ResponseContainer>
  );
};
