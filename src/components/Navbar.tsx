import Link from "next/link"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  
  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className="sticky z-[100] h-14 top-0 w-full border-b-2 border-gray-200 transition-all flex items-center justify-between px-[6px] sm:px-5 sm:pr-[5%] bg-white">
      <div>
        <p className="tracking-wide text-[1.1rem] sm:text-[1.2rem]">case<span className="text-green-600">cobra</span></p>
      </div>
      <div>
        {user ? (
          <>
            <Link href={'/api/auth/logout'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] transition-all hover:bg-slate-300">Logout</Link>
            {isAdmin ? <Link href={'/dashboard'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] transition-all hover:bg-slate-300">Dashboard</Link> : null}  
            <Link href={'/configure/upload'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] text-white font-[500] rounded-md bg-slate-800">Create case</Link>        
          </>
        ) : (
          <>
            <Link href={'/api/auth/register'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] transition-all hover:bg-slate-300">Sign up</Link>
            <Link href={'/api//auth/login'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] transition-all hover:bg-slate-300">Login</Link>
            <Link href={'/configure/upload'} className="text-[0.80rem] sm:text-[0.86rem] sm:tracking-tighter py-1 px-1 sm:px-2 mx-[2px] sm:mx-[6px] text-white font-[500] rounded-md bg-slate-800">Create case</Link>        
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar