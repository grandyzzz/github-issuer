import { useSelector } from 'react-redux'
import type { RootState } from 'modules/core'
import {
  OrderDirection,
  Repository,
  RepositoryOrderField,
  useUserRepositoriesQuery,
} from 'modules/graphql/codegen'
import { Text } from 'modules/ui'
import { RepositoriesList } from '../RepositoriesList'

function UserRepositoriesList() {
  const userLogin = useSelector(
    (state: RootState) => state.users.selectedUser?.login
  )
  const { loading, ...result } = useUserRepositoriesQuery({
    variables: {
      login: userLogin || '',
      orderBy: {
        direction: OrderDirection.Desc,
        field: RepositoryOrderField.CreatedAt,
      },
    },
    skip: !userLogin,
  })

  const repositories =
    (result.data?.user?.repositories?.nodes as Repository[]) || []

  if (repositories.length === 0 && !loading)
    return (
      <Text variant="heading2" color="gray">
        No repositories found
      </Text>
    )

  if (repositories.length === 0) return null

  return <RepositoriesList className="mt-5" repositories={repositories} />
}

export default UserRepositoriesList
