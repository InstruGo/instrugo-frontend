import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsFacebook, BsYoutube, BsTwitter, BsGithub } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

import { Button, HeaderContainer } from '@components';
import { StyledAppName } from '@modules/SimpleHeader/Simpleheader';

import {
  FeatureDescription,
  FlowContainer,
  FlowItem,
  FooterColumn,
  FooterContainer,
  ContentLayout,
  LoginButtonStyles,
  SocialIcons,
  MainSection,
  StyledNavbar,
  Separator,
  InfoAndImage,
  TextInfo,
} from './styles';

export const LandingPage = () => {
  const router = useRouter();

  return (
    <div>
      <HeaderContainer
        style={{
          background: 'white',
        }}
      >
        <StyledAppName style={{ color: '#10434E' }}>
          <FormattedMessage id={'appName'} />
        </StyledAppName>

        <StyledNavbar>
          <Button
            variant="secondary"
            style={LoginButtonStyles}
            onClick={() => router.push('/login')}
          >
            <FormattedMessage id="button.login" />
          </Button>
        </StyledNavbar>
      </HeaderContainer>

      <ContentLayout>
        <MainSection>
          <InfoAndImage>
            <TextInfo>
              <div>
                <FormattedMessage id="landingPage.generalInfo" />
              </div>
              <div style={{ fontSize: '16px' }}>
                <FormattedMessage id="landingPage.createAnAccount" />
              </div>
              <Button
                style={{
                  padding: '8px 50px',
                  fontSize: '25px',
                }}
                onClick={() => router.push('/register')}
              >
                <FormattedMessage id="landingPage.joinButton" />
              </Button>
            </TextInfo>

            <div>
              <Image
                src="/exams.png"
                alt="landingBackground"
                width="400px"
                height="220px"
                style={{ borderRadius: '5px' }}
              />
            </div>
          </InfoAndImage>

          <FlowContainer>
            <FlowItem>
              <span className="arrowIn"></span>
              <div>
                <FormattedMessage id="landingPage.phase1" />
              </div>
              <span className="arrowOut"></span>
            </FlowItem>
            <FlowItem>
              <span className="arrowIn"></span>
              <div>
                <FormattedMessage id="landingPage.phase2" />
              </div>
              <span className="arrowOut"></span>
            </FlowItem>
            <FlowItem>
              <span className="arrowIn"></span>
              <div>
                <FormattedMessage id="landingPage.phase3" />
              </div>
              <span className="arrowOut"></span>
            </FlowItem>
            <FlowItem>
              <span className="arrowIn"></span>
              <div>
                <FormattedMessage id="landingPage.phase4" />
              </div>
              <span className="arrowOut"></span>
            </FlowItem>
          </FlowContainer>
        </MainSection>

        <Separator />

        <FeatureDescription>
          <div>
            <FormattedMessage id="landingPage.lessons" />
          </div>
          <div style={{ width: '320px', height: '210px' }}>
            <Image
              src="/lessons.png"
              alt="lessonsImage"
              width="320px"
              height="210px"
              layout="fixed"
            />
          </div>
        </FeatureDescription>

        <Separator />

        <FeatureDescription>
          <div>
            <p>
              <FormattedMessage id="landingPage.quality" />
            </p>
            <p style={{ marginTop: '30px' }}>
              <FormattedMessage id="landingPage.ratings" />
            </p>
          </div>
          <div style={{ width: '320px', height: '375px' }}>
            <Image
              src="/ratings.png"
              alt="lessonsImage"
              width="320px"
              height="375px"
              layout="fixed"
            />
          </div>
        </FeatureDescription>
      </ContentLayout>

      <FooterContainer>
        <FooterColumn variant="alignLeft">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/neural.png"
              width="25px"
              height="25px"
              alt="footerLogo"
            />
            <div>
              <FormattedMessage id="appName" />
            </div>
          </div>

          <SocialIcons>
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
            <a
              href="https://github.com/InstruGo"
              target="_blank"
              rel="noreferrer"
              style={{ paddingLeft: '10px' }}
            >
              <BsGithub />
            </a>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <div>
            <FormattedMessage id="footer.support" />
          </div>
          <div>
            <a href="mailto:ivan.skorupan@fer.hr,karlo-valentin.cihlar@fer.hr,fptodoric@gmail.com,lara.granosa@fer.hr">
              <FormattedMessage id="footer.contact" />
            </a>
          </div>
          <div>
            <FormattedMessage id="footer.faq" />
          </div>
        </FooterColumn>

        <FooterColumn variant="alignRight">
          <div>
            <FormattedMessage id="footer.privacy" />
          </div>
          <div>
            <FormattedMessage id="footer.terms" />
          </div>
          <div>
            <FormattedMessage id="footer.copyright" />
          </div>
        </FooterColumn>
      </FooterContainer>
    </div>
  );
};
