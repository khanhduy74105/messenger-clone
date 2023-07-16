'use client'

import { SessionProvider } from "next-auth/react"

interface ActionContextProps {
    children: React.ReactNode
}

const AuthContext = ({ children }: ActionContextProps) => {
    return (
        <SessionProvider> {children} </SessionProvider>
    )
}

export default AuthContext