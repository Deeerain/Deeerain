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
  name: string,
  avatar_url: string,
  bio: string | null,
}

export interface IReadmeFileInfo {
  html_url: string
}
