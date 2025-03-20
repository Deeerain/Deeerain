import { defineStore } from "pinia";
import type { IRepository } from "../api/types";
import useApi from "../api";

const api = useApi(true)

export const useRepositoriesStore = defineStore('repositories', {
    state: () => {
        return {
            items: <Array<IRepository>>[],
        }
    },
    actions: {
        async load(username: string) {
            this.items = await api.GetUserRepositories(username)
        },
    }
})