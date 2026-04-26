import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image src={logo} width={300} height={200} alt='logo' className='mx-auto'/>
            <p className='dark3 text-lg'>Journalism Without Fear or Favour</p>
            <p className='font-bold dark3 text-lg'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;Header