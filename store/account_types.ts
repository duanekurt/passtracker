import type { AccountTypeActions, AccountTypeState } from "~/common/interfaces/account_types";

const state = () => ({
    account_types: null,
    isLoading: false
})

const getters = {}

const actions = {
    async getAccountTypes() {
        const $this = useAccountTypeStore();
        $this.isLoading = true;

        const { response, data } = await useFetchApi('/account-type/all', {
            method: 'GET'
        });

        if (response.value.status === 200) {
            $this.isLoading = false
            $this.account_types = data.value.data
        }

        return response.value
    }
}


export const useAccountTypeStore = defineStore<'accountTypeStore', AccountTypeState, {}, AccountTypeActions>('accountTypeStore', {
    state,
    getters,
    actions
})