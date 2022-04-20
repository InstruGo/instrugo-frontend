import Image from 'next/image';

import {
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineStar,
} from 'react-icons/ai';

import { Button } from '@components';
import { StudentsNavbar } from '@modules';
import { OptionalUser } from '@types';

import {
  AboutMe,
  Details,
  ProfileCard,
  ProfileName,
  Rating,
  Stat,
  Stats,
  StyledContent,
} from './styles';

export const Profile = ({ user }: { user: OptionalUser }) => {
  return (
    <>
      <StudentsNavbar />
      <StyledContent>
        <ProfileCard>
          <Button style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <AiOutlineEdit />
          </Button>

          <Image
            src="/favicon.ico"
            width="200px"
            height="200px"
            alt="profilePhoto"
          />

          <ProfileName>{user?.firstName + ' ' + user?.lastName}</ProfileName>

          {user?.role === 'tutor' && (
            <Rating>
              <AiOutlineStar size="30px" />
              <AiOutlineStar size="30px" />
              <AiOutlineStar size="30px" />
              <AiOutlineStar size="30px" />
              <AiOutlineStar size="30px" />
            </Rating>
          )}

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

          <Details>
            <div>
              <AiOutlineMail />
              <div>{user?.email}</div>
            </div>
            <div>
              <AiOutlinePhone />
              <div>{user?.phone}</div>
            </div>
          </Details>

          <AboutMe>
            <div>About me</div>
            <div>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
            </div>
          </AboutMe>
        </ProfileCard>
      </StyledContent>
    </>
  );
};
