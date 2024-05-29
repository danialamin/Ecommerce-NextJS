import Link from "next/link"

const Navbar = () => {
  const user = true
  const admin = true

  return (
    <nav className="sticky z-[100] h-14 top-0 w-full border-b-2 border-gray-200 bg-slate-50 transition-all flex items-center justify-between px-[6px] sm:px-5 sm:pr-[5%]">
      <div>
        <p className="tracking-wide text-[1.2rem]">case<span className="text-green-600">cobra</span></p>
      </div>
      <div>
        {user ? (
          <>
            <Link href={'/api/auth/logout'} className="text-[0.84rem] tracking-tight py-1 px-2 mx-1 transition-all hover:bg-slate-300">Logout</Link>
            {admin ? <Link href={'/dashboard'} className="text-[0.84rem] tracking-tight py-1 px-2 mx-1 transition-all hover:bg-slate-300">Dashboard</Link> : null}  
            <Link href={'/configure/upload'} className="text-[0.85rem] tracking-tight py-1 px-2 mx-1 text-white font-[500] rounded-md bg-slate-800">Create case</Link>        
          </>
        ) : (
          <>
            <Link href={'/api/auth/register'} className="text-[0.84rem] tracking-tight py-1 px-2 mx-1 transition-all hover:bg-slate-300">Sign up</Link>
            <Link href={'/api//auth/login'} className="text-[0.84rem] tracking-tight py-1 px-2 mx-1 transition-all hover:bg-slate-300">Login</Link>
            <Link href={'/configure/upload'} className="text-[0.85rem] tracking-tight py-1 px-2 mx-1 text-white font-[500] rounded-md bg-slate-800">Create case</Link>        
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar