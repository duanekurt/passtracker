import type { AccountType } from "./account_types"

export interface PwTrackPaginate {
    current_page: number
    data: PwTrack[] | null
    first_page_url: string
    from: number
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
}

export interface PwTrack {
    id: number
    password_for: string
    email_username: string
    slug: string
    hashed_password: string
    account_type: AccountType
    status: number
    user_id: number
    created_at: string
    updated_at: string
}
export interface PwTrackState {
    pw_tracks: PwTrackPaginate
    selected_pwtrack: PwTrack | null
    isLoading: boolean
}

export interface PwTrackActions {
    getPasswordTracks(page?: number): Promise<any>
    createPasswordTrack(payload: any): Promise<any>
}