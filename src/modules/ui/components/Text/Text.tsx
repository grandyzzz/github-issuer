import type {ComponentType, JSXElementConstructor, ReactElement, ReactNode} from 'react'
import cn from 'classnames'

interface TextProps {
  className?: string
  color?: string
  variant?: Variant
  children?: ReactNode | any
}

type Variant =
  | 'heading'
  | 'heading2'
  | 'body'
  | 'bodyBold'

const componentsMap: { [P in Variant]: ComponentType<any> | string } = {
  heading: 'h1',
  heading2: 'h2',
  body: 'p',
  bodyBold: 'p',
}

const stylesMap: { [P in Variant]: ComponentType<any> | string } = {
  heading: 'text-3xl',
  heading2: 'text-xl',
  body: 'text-base',
  bodyBold: 'text-base font-bold',
}

function Text({ className, variant = 'body', children } : TextProps) {

  const Component: JSXElementConstructor<any> | ReactElement | ComponentType<any> | string =
    componentsMap?.[variant]

  return (
    <Component className={cn(className, stylesMap?.[variant])}>
      {children}
    </Component>
  )
}

export default Text
