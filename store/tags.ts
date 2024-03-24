import type { TagActions, TagGetters, TagState } from "~/common/interfaces/tags"

const state = () => ({
    tags: [],
    isLoading: false
})
const getters = {}
const actions = {
    async createTag() {
        const tagStore = useTagStore()
        tagStore.isLoading = true
    },
    async getTags() { }
}


export const useTagStore = defineStore<'tagStore', TagState, {}, TagActions>('tagStore', {
    state,
    getters,
    actions
})