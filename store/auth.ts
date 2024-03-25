import type { AuthActions, AuthState } from "~/common/interfaces/auth";

const state = () => ({
    isLoading: false,
    isExisting: false,
    isSubmitted: false,
    token: '',
    user: null
})

const getters = {}

const actions = {
    async checkUserExist(email: string): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        $this.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi(`/user/exist/${email}`, {
                method: 'GET'
            });

            if (response.value.status == 200) {
                $this.isSubmitted = true
                if (data.value.data.exist) {
                    $this.isExisting = true
                }
            }

            // return response.value

        } catch (err) {
            useResponseToast(err)
        }

        $this.isLoading = false
        loader.finish();

    },

    async login(payload: any): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();
        $this.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/auth/login', {
                method: 'POST',
                data: payload
            })

            if (data.value.data?.token) {
                $this.token = data.value.data.token.access_token
                $this.user = data.value.data.user
                router.push('/dashboard')
            }

        } catch (err) {
            useResponseToast(err)
        }
        $this.isLoading = false
        loader.finish();
    },

    async register(payload: any): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        $this.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/auth/register', {
                method: 'POST',
                data: payload
            })

            if (data.value.data?.token) {
                $this.token = data.value.data.token.access_token
                $this.user = data.value.data.user
            }

            console.log(response)
        } catch (err) {
            useResponseToast(err)
        }
        $this.isLoading = false
        loader.finish();

    },

    async logout(): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();

        $this.isLoading = true
        loader.start()

        $this.token = ''
        $this.user = null

        $this.isLoading = false
        loader.finish()

        router.push('/')
    },

    async setMasterPassword(payload: any): Promise<any> {
        const $this = useAuthStore()

        try {
            const { data, response } = await useFetchApi('/user/set-master-password', {
                method: 'PUT',
                data: payload.value
            })
            $this.user!.master_password = data.value.data.user.master_password
            useResponseToast(response)
        } catch (err) {
            useResponseToast(err)
        }
    }
}


export const useAuthStore = defineStore<'authStore', AuthState, {}, AuthActions>('authStore', {
    state,
    getters,
    actions,
    persist: {
        storage: persistedState.localStorage,
        paths: ['token', 'user']
    }
})