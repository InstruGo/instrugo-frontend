import React, { Fragment } from 'react';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';

import { Modal } from '@components';
import { RequestDetails } from '@modules';

import {
  CardText,
  CardHeader,
  CardBody,
  CardItem,
  CardStyle,
  ModalButton,
} from './styles';
import { useRouter } from 'next/router';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof CardStyle>;

export interface CardProps extends StitchesComponentProps {
  index: number;
  subject: string;
  subfield: string;
  location: string;
  meetingType: string;
  grade?: number;
  educationLvl?: string;
  dateAndTime?: string;
}

export const Card = ({
  index,
  subject,
  subfield,
  location,
  meetingType,
  grade,
  educationLvl,
  dateAndTime,
  color,
}: CardProps) => {
  const [showRequestDetailsModal, setRequestDetailsModal] =
    React.useState(false);
  const router = useRouter();
  return (
    <>
      <Fragment>
        <ModalButton
          onClick={() => {
            router.push({
              pathname: '/student/request-details/[id]',
              query: { id: index },
            });
          }}
        >
          <CardStyle style={{ borderColor: color }}>
            <CardHeader style={{ backgroundColor: color, borderColor: color }}>
              {subject}
            </CardHeader>
            <CardBody style={{ backgroundColor: color + '33' }}>
              {dateAndTime && (
                <CardItem>
                  <AiOutlineClockCircle />
                  <CardText>
                    {new Intl.DateTimeFormat('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    }).format(new Date(dateAndTime))}
                  </CardText>
                </CardItem>
              )}
              <CardItem>
                <GoBook />
                <CardText>{subfield}</CardText>
              </CardItem>
              <CardItem>
                <MdOutlineMeetingRoom />
                <CardText>{meetingType}</CardText>
              </CardItem>
              <CardItem>
                <MdOutlineLocationOn />
                <CardText>{location}</CardText>
              </CardItem>
              {grade && educationLvl && (
                <CardItem>
                  <FaGraduationCap />
                  <CardText>{`${educationLvl}, ${grade}. grade`}</CardText>
                </CardItem>
              )}
            </CardBody>
            <Modal
              shouldShow={showRequestDetailsModal}
              closeAction={() => setRequestDetailsModal(false)}
            >
              <div style={{ marginRight: '30px' }}>
                <RequestDetails id={index} />
              </div>
            </Modal>
          </CardStyle>
        </ModalButton>
      </Fragment>
    </>
  );
};
