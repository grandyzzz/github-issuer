import { useState } from 'react'
import { Slider } from 'modules/ui'
import UserCard from '../UserCard'
import './UsersSlider.sass'

interface User {
  name: string
  repositories: number
  stars: number
}

const users: User[] = [
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
  {
    name: 'John Doe',
    repositories: 27,
    stars: 127,
  },
]

function UsersSlider() {
  const [activeUser, setActiveUser] = useState(0)

  function handleClick(index: number) {
    return function () {
      setActiveUser(index)
    }
  }

  return (
    <div className="users-slider mt-5 relative">
      <Slider>
        {users.map((user, index) => (
          <UserCard
            key={index}
            onClick={handleClick(index)}
            index={index}
            isActive={activeUser === index}
            user={user}
          />
        ))}
      </Slider>
      <div className="absolute w-[80px] h-full top-0 right-0 bg-gradient-to-l from-white z-10 pointer-events-none" />
      <div className="absolute w-[80px] h-full top-0 left bg-gradient-to-r from-white z-10 pointer-events-none" />
    </div>
  )
}

export default UsersSlider
