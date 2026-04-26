import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";


const Navbar = () => {
    
    return (
        <div className=" container mx-auto flex justify-between mt-10">
            <div>

            </div>
            <ul className="flex justify-between items-center gap-5 dark3">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className="flex gap-5 items-center">
                <Image src={userAvatar} alt="user avatar" width={60} height={60}></Image>
                <button className="btn btn-primary"><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;