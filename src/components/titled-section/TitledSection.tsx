import { FormattedMessage } from 'react-intl';

import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  StyledHr,
} from './styles';

interface TitledSectionProps {
  titleMsgId: string;
}

export const TitledSection = ({
  titleMsgId,
  children,
}: React.PropsWithChildren<TitledSectionProps>) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <FormattedMessage id={titleMsgId} />
        <StyledHr />
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};
