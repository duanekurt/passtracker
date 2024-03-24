export interface AccountType {
    id: number
    account_type_name: string
    created_at: string
    updated_at: string
}

export interface AccountTypeState {
    isLoading: boolean
    account_types: AccountType[] | null
}

export interface AccountTypeActions {
    getAccountTypes(): Promise<void>
}
