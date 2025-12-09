import { defineStore } from "pinia";
import type { IRepository, IUser } from "../api/types";
import useApi from "../api";

const api = useApi(true)

export const useRepositoriesStore = defineStore('repositories', {
  state: (): { user: IUser | null, items: Array<IRepository> } => {
    return {
      user: null,
      items: <Array<IRepository>>[],
    }
  },
  actions: {
    async load(username: string) {
      this.items = await api.GetUserRepositories(username)
      this.user = await api.GetUserInfo(username)
    },
  }
})
