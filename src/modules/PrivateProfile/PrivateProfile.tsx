import React, { useState } from 'react';

import { AiOutlineEdit, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

import {
  Button,
  ImageWithPlaceholder,
  Modal,
  Rating,
  Loader,
} from '@components';
import { useLessons, useUserContext } from '@hooks';
import { UserRole } from '@types';

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

export const PrivateProfile = () => {
  const { user } = useUserContext();
  const [isEditing, setEditing] = useState(false);

  const { data: lessonsLearned } = useLessons({ status: 'completed' });

  const { data: lessonsGiven } = useLessons({
    status: 'completed',
    isLessonTutor: true,
  });

  const hasSubjects = user?.subjects && user?.subjects.length !== 0;

  if (!user)
    return (
      <ProfileLayout style={{ marginTop: '50px' }}>
        <Loader />
      </ProfileLayout>
    );

  return (
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
          {user.birthDate && (
            <Stat>
              <div>
                <FormattedMessage id="user.age" />
              </div>
              <div>
                {user.birthDate ? getAgeFromBirthDate(user.birthDate) : ''}
              </div>
            </Stat>
          )}

          <Stat>
            <div>
              <FormattedMessage id="user.lessonsLearned" />
            </div>
            <div>{lessonsLearned ? lessonsLearned.length : 0}</div>
          </Stat>

          {user.role === UserRole.TUTOR && (
            <Stat>
              <div>
                <FormattedMessage id="user.lessonsGiven" />
              </div>
              <div>{lessonsGiven ? lessonsGiven.length : 0}</div>
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

          {user.role === 'student' && (
            <div>
              <MdOutlineSchool size="20px" />
              <div className="detail">
                {user.grade ? (
                  `${user.grade}. grade`
                ) : (
                  <FormattedMessage id="profile.noGrade" />
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
  );
};
