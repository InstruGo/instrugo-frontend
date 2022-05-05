import { FormattedMessage } from 'react-intl';

import { ImageWithPlaceholder, Modal, Rating, Loader } from '@components';
import { usePublicProfile } from '@hooks';

import {
  Description,
  ProfileContainer,
  PublicProfileName,
  Subjects,
  SubjectsList,
} from './styles';

/**
 * Only tutor profiles are publicly available.
 */

interface PublicProfileProps {
  userId: number;
  showProfile: boolean;
  setShowProfile: (state: boolean) => void;
}

export const PublicProfile = ({
  userId,
  showProfile,
  setShowProfile,
}: PublicProfileProps) => {
  const { data: publicProfile } = usePublicProfile(userId);

  const hasSubjects =
    publicProfile?.subjects && publicProfile?.subjects.length !== 0;

  if (!publicProfile)
    return (
      <Modal shouldShow={showProfile} closeAction={() => setShowProfile(false)}>
        <ProfileContainer>
          <Loader />
        </ProfileContainer>
      </Modal>
    );

  return (
    <Modal shouldShow={showProfile} closeAction={() => setShowProfile(false)}>
      <ProfileContainer>
        <ImageWithPlaceholder
          avatarUrl={publicProfile?.avatarUrl}
          placeholder="/profilePlaceholder.png"
          width="200px"
          height="200px"
          round
        />

        <PublicProfileName>
          {publicProfile.firstName + ' ' + publicProfile.lastName}
        </PublicProfileName>

        <Rating rating={parseInt(publicProfile.averageRating)} />

        <div>
          {publicProfile.description && (
            <Description>
              <div>
                <FormattedMessage id="profile.aboutMe" />
              </div>
              <div>{publicProfile.description}</div>
            </Description>
          )}

          {hasSubjects && (
            <Subjects>
              <div>
                <FormattedMessage id="tutor.subjectsTitle" />:
              </div>
              <SubjectsList>
                {publicProfile.subjects.map((subject) => {
                  return (
                    <div key={subject.id} style={{ color: `${subject.color}` }}>
                      {subject.name}
                    </div>
                  );
                })}
              </SubjectsList>
            </Subjects>
          )}
        </div>
      </ProfileContainer>
    </Modal>
  );
};
