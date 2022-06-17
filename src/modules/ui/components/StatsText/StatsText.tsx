import { Text } from '../Text'
import cn from 'classnames'
import { useMemo } from 'react'
import type { Colors } from '../Text'

export type StatItem = [string, number]

interface StatsTextProps {
  className?: string
  color?: Colors
  data: StatItem[]
}

export function StatsText({ className, data, color }: StatsTextProps) {
  const content = useMemo(() => {
    return data.map(([label, value]) => `${value} ${label}`).join(' · ')
  }, [data])

  return (
    <Text className={cn(className)} variant="body" color={color}>
      {content}
    </Text>
  )
}
