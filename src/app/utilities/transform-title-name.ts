export const transformName = (name: string): string => {
  type Folders = {
    [name: string]: string
  }
  const folders: Folders = {
    clients: 'Nuestros Clientes',
    about: 'Sobre nosotros',
  }

  if (folders[name]) return folders[name]

  return name
}
