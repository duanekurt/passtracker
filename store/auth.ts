const state = () => ({
    isLoading: false,
    isExisting: false,
    isSubmitted: false,
    token: '',
    user: {}
})

const getters = {}

const actions = {
    async checkUserExist(email: string): Promise<any> {
        const auth = useAuthStore()
        const loader = useLoadingIndicator();
        auth.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi(`/user/exist/${email}`, {
                method: 'GET'
            });

            if (response.value.status == 200) {
                auth.isSubmitted = true
                if (data.value.data.exist) {
                    auth.isExisting = true
                }
            }

            // return response.value

        } catch (err) {
            useResponseToast(err)
        }

        auth.isLoading = false
        loader.finish();

    },

    async login(payload: any): Promise<any> {
        const auth = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();
        auth.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/auth/login', {
                method: 'POST',
                data: payload
            })

            if (data.value.data?.token) {
                auth.token = data.value.data.token.access_token
                auth.user = data.value.data.user
                router.push('/dashboard')
            }

        } catch (err) {
            useResponseToast(err)
        }
        auth.isLoading = false
        loader.finish();
    },

    async register(payload: any): Promise<any> {
        const auth = useAuthStore()
        const loader = useLoadingIndicator();
        auth.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/auth/register', {
                method: 'POST',
                data: payload
            })

            if (data.value.data?.token) {
                auth.token = data.value.data.token.access_token
                auth.user = data.value.data.user
            }

            console.log(response)
        } catch (err) {
            useResponseToast(err)
        }
        auth.isLoading = false
        loader.finish();

    },

    async logout(): Promise<any> {
        const auth = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();

        auth.isLoading = true
        loader.start()

        auth.token = ''
        auth.user = {}

        auth.isLoading = false
        loader.finish()

        router.push('/')
    }
}


export const useAuthStore = defineStore('authStore', {
    state,
    getters,
    actions,
    persist: {
        storage: persistedState.localStorage,
        paths: ['token', 'user']
    }
})