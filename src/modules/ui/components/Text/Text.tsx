import type {
  ComponentType,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from 'react'
import cn from 'classnames'

type Variant = 'heading' | 'heading2' | 'body' | 'bodyBold'
export type Colors = 'black' | 'gray' | 'white' | string

const componentsMap: { [P in Variant]: ComponentType<any> | string } = {
  heading: 'h1',
  heading2: 'h2',
  body: 'p',
  bodyBold: 'p',
}

const stylesMap: { [P in Variant]: string } = {
  heading: 'text-3xl',
  heading2: 'text-xl',
  body: 'text-base',
  bodyBold: 'text-base font-bold',
}

const textColorsMap: { [P in Colors]: string } = {
  black: 'text-black',
  gray: 'text-gray-400',
  white: 'text-white',
}

interface TextProps {
  className?: string
  variant?: Variant
  color?: Colors
  center?: boolean
  component?: string
  children?: ReactNode
}

export function Text({
  className,
  variant = 'body',
  center = false,
  color = 'black',
  component,
  children,
}: TextProps) {
  const Component:
    | JSXElementConstructor<any>
    | ReactElement
    | ComponentType<any>
    | string = component || componentsMap?.[variant]

  const textClassNames = cn(
    className,
    stylesMap?.[variant],
    textColorsMap?.[color] || color,
    color,
    {
      'text-center': center,
    }
  )

  return <Component className={textClassNames}>{children}</Component>
}
