import type {ReactNode} from 'react';
import Container from '../Container';
import Text from 'modules/ui/components/Text/Text';

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full flex justify-center flex-col">
          <Text variant="heading">
            Heading
          </Text>
          <Text variant="heading2">
            Heading 2
          </Text>
          <Text variant="body">
            Body
          </Text>
          <Text variant="bodyBold">
            Body Bold
          </Text>
        </div>
      </Container>
      {children}
    </div>
  );
}

export default Layout;