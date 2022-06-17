import { RepositoriesList } from '../RepositoriesList'

interface Repository {
  id: string
  title: string
  stars: number
  watchers: number
}

const repositories: Repository[] = [
  {
    id: '123',
    title: 'Super Cool Project',
    stars: 1527,
    watchers: 127,
  },
  {
    id: '1234',
    title: 'Super Cool Project',
    stars: 1527,
    watchers: 127,
  },
  {
    id: '1235',
    title: 'Super Cool Project',
    stars: 1527,
    watchers: 127,
  },
  {
    id: '1236',
    title: 'Super Cool Project',
    stars: 1527,
    watchers: 127,
  },
  {
    id: '1237',
    title: 'Super Cool Project',
    stars: 1527,
    watchers: 127,
  },
]

function UserRepositoriesList() {
  return <RepositoriesList className="mt-5" repositories={repositories} />
}

export default UserRepositoriesList
