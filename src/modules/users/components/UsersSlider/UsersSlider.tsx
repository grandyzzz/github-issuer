import type { User } from 'modules/graphql/codegen'
import { Slider } from 'modules/ui'
import UserCard from '../UserCard'
import './UsersSlider.sass'

interface UsersSliderProps {
  users: User[]
}

function UsersSlider({ users }: UsersSliderProps) {
  return (
    <div className="users-slider mt-5 relative min-h-[180px]">
      <Slider>
        {users &&
          users.map((user, index) => (
            <UserCard key={user.id} index={index} user={user} />
          ))}
      </Slider>
      <div className="absolute w-[80px] h-full top-0 right-0 bg-gradient-to-l from-white z-10 pointer-events-none" />
      <div className="absolute w-[80px] h-full top-0 left bg-gradient-to-r from-white z-10 pointer-events-none" />
    </div>
  )
}

export default UsersSlider
