interface IChildLink{
  name: string,
  link: string
}

export interface ILink{
  name: string,
  link: string

  child: IChildLink[] | null
}

export interface IHomeItem{
  title: string,
  text: string,
  image: string,
  link: string,
  color?: string
}
