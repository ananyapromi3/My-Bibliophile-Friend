import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App() {
  const router = useRouter();
  return (
    <div>
      <h1>HIIIIIII</h1>
      <button onClick={() => router.push('/bookman/login')} >
        Bookman login
      </button>
      <button onClick={() => router.push('/bookman/signup')} >
        Bookman signup
      </button>
      <button onClick={() => router.push('/delivery/login')} >
        Delivery login
      </button>
      <button onClick={() => router.push('/delivery/signup')} >
        Delivery signup
      </button>
    </div>
  )
}