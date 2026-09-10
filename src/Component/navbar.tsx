
import Logo from '../assets/logo.png'
import { AiFillDollarCircle } from "react-icons/ai";



const Navbar = ({ coin }: { coin: number }) => {
    
    return (
        <>
            <nav >
                <div className='flex justify-between container mx-auto items-center '>
      <img src={Logo} alt=""  className='pt-2'/>
      <ul className='flex gap-4 items-center cursor-pointer'>
        <li>Home</li>
        <li>Fixtures</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
      <h2 className='font-bold text-3xl text-black flex gap-2 items-center'><AiFillDollarCircle />{coin}</h2>
      </div>
    </nav> 
        </>
    );
};

export default Navbar;