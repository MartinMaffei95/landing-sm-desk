export const getClientNames = async () => {
  const request = await fetch('http://localhost:8888/project-1/graphql', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query: `{
                posts{
                    nodes {
                    id
                    slug
                    title
                  
                    }
                }
                }
    `,
    }),
  });
  return await request.json();
};
