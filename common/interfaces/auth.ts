export interface User {
    id: number
    email: string
    email_verified_at: string | null
    first_name: string
    last_name: string
    master_password: string
    created_at: string
    updated_at: string
}
export interface AuthState {
    isLoading: boolean
    isExisting: boolean
    isSubmitted: boolean
    token: string
    user: User | null
}
export interface AuthActions {
    checkUserExist(email: string): Promise<void>
    login(payload: any): Promise<void>
    register(payload: any): Promise<void>
    logout(): Promise<void>
    setMasterPassword(payload: any): Promise<void>
}