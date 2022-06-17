import cn from 'classnames'

interface DividerProps {
  className?: string
}

export const Divider = ({ className }: DividerProps) => (
  <div className={cn(className, 'w-full h-px bg-gray-300 my-5')} />
)
