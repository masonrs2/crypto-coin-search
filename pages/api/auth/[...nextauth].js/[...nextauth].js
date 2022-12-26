import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: "148457193398-dsh3qurp4jinl2e9nsfu4acph2nbemc5.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ]
})