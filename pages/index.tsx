import { signOut, useSession } from 'next-auth/react'
import {Inter} from 'next/font/google'


const inter = Inter({subsets: ['latin']})

function Home() {
    const {data:session,status} = useSession({
        required: true,
    });
    if(status=="loading") return <div>Loading...</div>


    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <button onClick={() => signOut()}>Sign out</button>
        </main>
    )
}
export default Home;