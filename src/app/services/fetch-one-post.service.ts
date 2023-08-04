export const getOnePost = async (slug: string) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const queryBody = {
    query: `{
        post(id: "${slug}", idType: SLUG) {
            featuredImage{
            node{
                mediaItemUrl
            }
            }
            id
            databaseId
            title
            uri
            content
        }
        }
    `,
  }
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(queryBody),
    next: { revalidate: 10 },
  }

  const res = await fetch(process?.env?.GRAPHQL_URI || '', options)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
