import React, { useState } from 'react';

import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import { Button, ImageWithPlaceholder, Modal, Rating } from '@components';
import { Loader } from '@components/icons';
import { Navbar } from '@modules';
import { OptionalUser } from '@types';

import { EditProfileForm } from './EditProfileForm';
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
} from './styles';
import { getAgeFromBirthDate } from './utils';

export const PrivateProfile = ({ user }: { user: OptionalUser }) => {
  const [isEditing, setEditing] = useState(false);

  if (!user)
    return (
      <>
        <Navbar />
        <ProfileLayout style={{ marginTop: '50px' }}>
          <Loader width="40px" height="40px" />
        </ProfileLayout>
      </>
    );

  const hasSubjects = user.subjects && user.subjects.length !== 0;

  return (
    <>
      <Navbar />
      <ProfileLayout>
        <ProfileCard>
          <Button css={EditButtonStyles} onClick={() => setEditing(true)}>
            <AiOutlineEdit size="30px" fill="#10434E" />
          </Button>

          {isEditing && (
            <Modal shouldShow={isEditing} closeAction={() => setEditing(false)}>
              <EditProfileForm user={user} setEditing={setEditing} />
            </Modal>
          )}

          <ImageWithPlaceholder
            avatarUrl={user?.avatarUrl}
            placeholder="/profilePlaceholder.png"
            width="200px"
            height="200px"
            round
          />

          <ProfileName>{user.firstName + ' ' + user.lastName}</ProfileName>

          {user.role === 'tutor' && (
            <Rating rating={parseInt(user.averageRating)} />
          )}

          <Stats>
            <Stat>
              <div>
                <FormattedMessage id="user.age" />
              </div>
              <div>{getAgeFromBirthDate(user.birthDate)}</div>
            </Stat>
            {user.role === 'student' ? (
              <Stat>
                <div>
                  <FormattedMessage id="user.lessonsLearned" />
                </div>
                <div>428</div>
              </Stat>
            ) : (
              <Stat>
                <div>
                  <FormattedMessage id="user.lessonsGiven" />
                </div>
                <div>428</div>
              </Stat>
            )}
          </Stats>

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
                <div className="detail">
                  {user.educationLevel ? (
                    <FormattedMessage id={`user.${user.educationLevel}`} />
                  ) : (
                    <FormattedMessage id="profile.noEducationLevel" />
                  )}
                </div>
              </div>
            )}
          </Details>

          {user.role === 'tutor' && (
            <Subjects>
              <div>
                <FormattedMessage id="tutor.subjectsTitle" />:
              </div>
              {hasSubjects ? (
                user.subjects.map((subject) => {
                  return (
                    <li key={subject.id} style={{ color: `${subject.color}` }}>
                      {subject.name}
                    </li>
                  );
                })
              ) : (
                <div>
                  <FormattedMessage id="profile.noSubjects" />
                </div>
              )}
            </Subjects>
          )}

          <AboutMe>
            <div>
              <FormattedMessage id="profile.aboutMe" />
            </div>
            <div>
              {user.description ? (
                user.description
              ) : (
                <FormattedMessage id="profile.noDescription" />
              )}
            </div>
          </AboutMe>
        </ProfileCard>
      </ProfileLayout>
    </>
  );
};
