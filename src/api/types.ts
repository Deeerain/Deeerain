export interface IRepository {
  id: number
  name: string
  description: string
  owner: IUser
  language: string
  html_url: string
  image: string
}

export interface IUser {
  login: string,
  name: string
}

export interface IReadmeFileInfo {
  html_url: string
}
