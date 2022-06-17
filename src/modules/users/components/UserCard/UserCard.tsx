import cn from 'classnames'
import { useSwiper } from 'swiper/react'
import { StatItem, StatsText, Text } from 'modules/ui'
import styles from './UserCard.module.sass'
import type { RootState } from 'modules/core'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../services'
import type { User } from 'modules/graphql/codegen'

interface UserCardProps {
  className?: string
  user: User
  index: number
}

function UserCard({ className, user, index }: UserCardProps) {
  const swiper = useSwiper()
  const dispatch = useDispatch()
  const selectedUser = useSelector(
    (state: RootState) => state.users.selectedUser
  )

  const data: StatItem[] = [
    ['Repositories', user.repositories.totalCount],
    ['Stars', user?.starredRepositories?.totalCount || 0],
  ]

  const rootClassName = cn(className, styles.root, {
    [styles.active]: user.id === selectedUser?.id,
  })

  function handleClick() {
    dispatch(setSelectedUser(user))
    swiper.slideTo(index)
  }

  return (
    <article onClick={handleClick} className={rootClassName}>
      <Text variant="heading2" color="white">
        {user.name || user.login}
      </Text>
      <StatsText data={data} color="gray" />
      <div className={styles.overlay}>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={user.avatarUrl}
          alt={user.name || user.login}
        />
      </div>
    </article>
  )
}

export default UserCard
