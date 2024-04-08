import type { TagActions, TagGetters, TagState } from "~/common/interfaces/tags"

const state = () => ({
    tags: [],
    isLoading: false
})
const getters = {}
const actions = {
    async createTag(payload: any) {
        const $this = useTagStore()
        $this.isLoading = true

        const { data, response } = await useFetchApi('/tag/create', {
            method: 'POST',
            data: payload
        })
    },
    async getTags() {
        const $this = useTagStore()

        const { data, response } = await useFetchApi('/tag/all', {
            method: 'GET',
        })

        console.log(response.value)
    }
}


export const useTagStore = defineStore<'tagStore', TagState, {}, TagActions>('tagStore', {
    state,
    getters,
    actions
})