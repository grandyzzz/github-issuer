import cn from 'classnames'
import { useSwiper } from 'swiper/react'
import { StatItem, StatsText, Text } from 'modules/ui'
import styles from './UserCard.module.sass'

interface UserCardProps {
  className?: string
  user: any
  isActive?: boolean
  index: number
  onClick: () => void
}

const data: StatItem[] = [
  ['Repositories', 27],
  ['Stars', 127],
]

function UserCard({
  className,
  onClick,
  user,
  isActive,
  index,
}: UserCardProps) {
  const swiper = useSwiper()

  const rootClassName = cn(className, styles.root, {
    [styles.active]: isActive,
  })

  function handleClick() {
    onClick()
    swiper.slideTo(index)
  }

  return (
    <article onClick={handleClick} className={rootClassName}>
      <Text variant="heading2" color="white">
        {user.name}
      </Text>
      <StatsText data={data} color="gray" />
      <div className={styles.overlay}>hey</div>
    </article>
  )
}

export default UserCard
