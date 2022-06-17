export async function getAccessToken() {
  return process.env.REACT_APP_GITHUB_TOKEN || ''
}
