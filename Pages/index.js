import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App() {
  const router = useRouter();
  return (
    <div>
      <h1>HIIIIIII</h1>
      <button onClick={() => router.push('/BookFriend/login')} >
        Bookman login
      </button>
      <button onClick={() => router.push('/BookFriend/signup')} >
        Bookman signup
      </button>
      <button onClick={() => router.push('/DelivaryMan/login')} >
        Delivery login
      </button>
      <button onClick={() => router.push('/DelivaryMan/signup')} >
        Delivery signup
      </button>
    </div>
  )
}