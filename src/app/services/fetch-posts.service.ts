export const gatAllPosts = async () => {
  const request = await fetch('http://localhost:8888/project-1/graphql', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query: `{
                posts{

                    edges{
                    node{
                        title
                        date
                        content
                        excerpt
                        slug
                    featuredImage {
                        node {
                        id
                        uri
                        link
                        mediaItemUrl
                        }
                    }
                    }
                    }
                }
                }
    `,
    }),
  });
  return await request.json();
};
