export const getMenu = async () => {
  const res = await fetch(process?.env?.GRAPHQL_URI || '', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query: `
            {
            menuItems(where:{location:PRIMARY}){
            nodes{
                key:id
                parentId
                title:label
                url
            }
            }
        }
    `,
    }),
  });
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await res.json();
};
