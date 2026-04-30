'use client'

import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);

    return (
        <div className=" container mx-auto flex justify-between mt-10">
            <div>

            </div>
            <ul className="flex justify-between items-center gap-5 dark3">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            {  isPending ? <span className="loading loading-spinner loading-md"></span> :
                user ? (
                    <div className="flex gap-5 items-center">
                        <h2>Hello, {user?.name}</h2>
                        <Image className="rounded-full" src={user?.image || userAvatar} alt="user avatar" width={60} height={60}></Image>
                        <button className="btn btn-primary" onClick={async()=> await authClient.signOut()}>Logout</button>
                    </div>
                ):
                (
                    <button className="btn btn-primary"><Link href={'/login'}>Login</Link></button>
                )
            }

        </div>
    );
};

export default Navbar;