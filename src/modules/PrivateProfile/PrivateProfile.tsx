import React, { useState } from 'react';

import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import { Button, ImageWithPlaceholder, Rating } from '@components';
import { StudentsNavbar } from '@modules';
import { OptionalUser } from '@types';

import {
  AboutMe,
  Details,
  ProfileCard,
  ProfileName,
  Stat,
  Stats,
  ProfileLayout,
  Subjects,
  EditButtonStyles,
  SaveChangesButtonStyles,
} from './styles';

export const PrivateProfile = ({ user }: { user: OptionalUser }) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <>
      <StudentsNavbar />
      <ProfileLayout>
        <ProfileCard>
          {!isEditing && (
            <Button css={EditButtonStyles} onClick={() => setEditing(true)}>
              <AiOutlineEdit size="30px" fill="#10434E" />
            </Button>
          )}

          {isEditing && (
            <Button
              css={SaveChangesButtonStyles}
              onClick={() => setEditing(false)}
            >
              <FormattedMessage id="profile.saveChanges" />
            </Button>
          )}

          <ImageWithPlaceholder
            avatarUrl={user?.avatarUrl}
            placeholder="/profilePlaceholder.png"
            width="200px"
            height="200px"
            round
          />

          {user && (
            <ProfileName>{user.firstName + ' ' + user.lastName}</ProfileName>
          )}

          {user?.role === 'tutor' && user.averageRating && (
            <Rating rating={user.averageRating} />
          )}

          {user && (
            <Stats>
              <Stat>
                <div>Age</div>
                <div>23</div>
              </Stat>
              <Stat>
                <div>kn/h</div>
                <div>40</div>
              </Stat>
              <Stat>
                <div>Lessons</div>
                <div>428</div>
              </Stat>
            </Stats>
          )}

          {user && (
            <Details>
              <div>
                <AiOutlineMail size="20px" />
                <div className="detail">{user.email}</div>
              </div>
              <div>
                <AiOutlinePhone size="20px" />
                <div className="detail">
                  {user.phone ? (
                    user.phone
                  ) : (
                    <FormattedMessage id="profile.phoneNumberMissing" />
                  )}
                </div>
              </div>
              {user.role === 'student' && (
                <div>
                  <MdOutlineSchool size="20px" />
                  <div className="detail">grade</div>
                </div>
              )}
            </Details>
          )}

          {user?.role === 'tutor' && (
            <Subjects>List of set subjects...</Subjects>
          )}

          {user && (
            <AboutMe>
              <div>
                <FormattedMessage id="profile.aboutMe" />
              </div>
              <div>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              </div>
            </AboutMe>
          )}
        </ProfileCard>
      </ProfileLayout>
    </>
  );
};
