export interface TagState {
    isLoading: boolean
    tags: Tag[] | null
}
export interface TagGetters { }
export interface TagActions {
    createTag(payload: any): Promise<void>
    getTags(): Promise<void>
}
export interface Tag {
    id: number
    tag_name: string
    tag_color: string
    status: boolean
    created_at: Date
    updated_at: Date
}