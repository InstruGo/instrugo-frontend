import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { CardText, CardHeader, CardBody, CardItem, CardStyle } from './styles';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdOutlineLocationOn } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import { GiOpenBook } from 'react-icons/gi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

type StitchesComponentProps = React.ComponentPropsWithoutRef<typeof CardStyle>;

export interface CardProps extends StitchesComponentProps {
  children: React.ReactChild | React.ReactChild[];
  shouldShow: boolean;
  onBackgroundClick?: () => void;
  subfield: string;
  location: string;
  meetingType: string;
  grade?: number;
  educationLvl?: string;
  dateAndTime?: string;
  subject: string;
}

export const Card = (props: CardProps) => {
  return (
    <>
      <Fragment>
        <CardStyle>
          <CardHeader>{props.subject}</CardHeader>
          <CardBody>
            {props.dateAndTime && (
              <CardItem>
                <AiOutlineClockCircle />
                <CardText>{props.dateAndTime}</CardText>
              </CardItem>
            )}
            <CardItem>
              <GoBook />
              <CardText>{props.subfield}</CardText>
            </CardItem>
            <CardItem>
              <MdOutlineMeetingRoom />
              <CardText>{props.meetingType}</CardText>
            </CardItem>
            <CardItem>
              <MdOutlineLocationOn />
              <CardText>{props.location}</CardText>
            </CardItem>
            {props.grade && props.educationLvl && (
              <CardItem>
                <FaGraduationCap />
                <CardText>{props.educationLvl + ', ' + props.grade}</CardText>
              </CardItem>
            )}
          </CardBody>
        </CardStyle>
      </Fragment>
    </>
  );
};
