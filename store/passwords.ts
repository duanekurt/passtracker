import type { PwTrackActions, PwTrackState } from "~/common/interfaces/pwtrack";

const state = () => ({
    pw_tracks: {
        current_page: 1,
        data: [],
        first_page_url: '',
        from: 0,
        next_page_url: '',
        path: '',
        per_page: 6,
        prev_page_url: '',
        to: 0
    },
    selected_pwtrack: null,
    isLoading: false
})

const getters = {}

const actions = {
    async getPasswordTracks(page?: number): Promise<any> {
        const loader = useLoadingIndicator();
        loader.start();
        const $this = usePwTrackStore();
        const { response, data } = await useFetchApi(`/pw/track/all${page == 1 ? '' : `?page=${page}`}`, {
            method: 'GET'
        })

        if (response.value.status == 200) {
            $this.pw_tracks = data.value.data
        }
        loader.finish()
        return response.value
    },

    async createPasswordTrack(payload: any): Promise<any> {
        const $this = usePwTrackStore();
        try {
            const { response, data } = await useFetchApi('/pw/track/create', {
                method: 'POST',
                data: payload
            });

            if ($this.pw_tracks.data !== null && $this.pw_tracks.data.length > 0) {
                $this.getPasswordTracks()
            } else {
                $this.pw_tracks.data = data.value.data
            }
            useResponseToast(response)
            return response.value
        } catch (err) {
            useResponseToast(err)
        }

    },

    async showPassword(pw_track_id: number): Promise<any> {
        // const $this = usePwTrackStore();
        try {
            const { response, data } = await useFetchApi('/pw/track/show-password', {
                method: 'POST',
                data: { id: pw_track_id }
            });

            if (response.value.status == 200) {
                return data.value
            }
        } catch (err) {
            useResponseToast(err)
        }
    }
}

export const usePwTrackStore = defineStore<'pwTrackStore', PwTrackState, {}, PwTrackActions>('pwTrackStore', {
    state,
    getters,
    actions
})