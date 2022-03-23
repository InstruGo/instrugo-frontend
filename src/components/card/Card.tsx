import React, { Fragment } from 'react';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';
import { CardText, CardHeader, CardBody, CardItem, CardStyle } from './styles';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof CardStyle>;

export interface CardProps extends StitchesComponentProps {
  subject: string;
  subfield: string;
  location: string;
  meetingType: string;
  grade?: number;
  educationLvl?: string;
  dateAndTime?: string;
}

export const Card = ({
  subject,
  subfield,
  location,
  meetingType,
  grade,
  educationLvl,
  dateAndTime,
}: CardProps) => {
  return (
    <>
      <Fragment>
        <CardStyle>
          <CardHeader>{subject}</CardHeader>
          <CardBody>
            {dateAndTime && (
              <CardItem>
                <AiOutlineClockCircle />
                <CardText>{dateAndTime}</CardText>
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
                <CardText>{`${educationLvl}, ${grade}`}</CardText>
              </CardItem>
            )}
          </CardBody>
        </CardStyle>
      </Fragment>
    </>
  );
};
