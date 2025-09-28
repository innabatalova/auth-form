export interface FieldType {
    login?: string
    password?: string
}

export interface apiResultType {
    userAuth: {
        status: number,
        message: string
    }
}