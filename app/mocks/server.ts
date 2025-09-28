import { createServer } from "miragejs"


export default function () {
    createServer({
        routes() {
            this.post("/api/auth", () => ({
                // auth success
                userAuth: {
                    status: 200,
                    message: 'user auth success'
                },

                // auth incorrect data
                // userAuth: {
                //     status: 400,
                //     message: 'User incorrect data'
                // },

                // auth incorrect login/password
                // userAuth: {
                //     status: 401,
                //     message: 'User incorrect login or password'
                // },

                // auth success
                // userAuth: {
                //     status: 500,
                //     message: 'Internal Server Error'
                // }
            }))
        },
    })
}