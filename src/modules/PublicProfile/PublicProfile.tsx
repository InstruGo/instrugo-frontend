import { Modal } from '@components';

/**
 * This component will get user info by userId and open a modal.
 * When close action is performed modal is closed and idle, awaiting next
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
  // Here will be used getUser hook and display appropriate info

  return (
    <Modal shouldShow={showProfile} closeAction={() => setShowProfile(false)}>
      display user info...
    </Modal>
  );
};
