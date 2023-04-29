interface IChildLinkSer{
  name: string,
  link: string
}

export interface ILinkSer{
  name: string,
  link: string

  child: IChildLinkSer[] | null
}

export interface IHomeItemSer{
  title: string,
  text: string,
  image: string,
  link: string,
  color?: string
}
