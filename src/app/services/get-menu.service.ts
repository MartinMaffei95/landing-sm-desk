export const getMenu = async () => {
  const res = await fetch(process?.env?.GRAPHQL_URI || '', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 10 },
    body: JSON.stringify({
      query: `
            {
            menuItems(where:{location:PRIMARY} first:1500){
            nodes{
                key:id
                parentId
                title:label
                url
                attachement {        
                  icon {
                    mediaItemUrl
                  }
                }
            }
            }
        }
    `,
    }),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  console.log(data.data.menuItems.nodes);

  return data;
};
