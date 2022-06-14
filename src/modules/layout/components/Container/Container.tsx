import type {ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container max-w-3xl">
      {children}
    </div>
  );
}

export default Container;