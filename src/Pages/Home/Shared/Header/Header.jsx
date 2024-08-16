import moment from 'moment';
import Logo from "../../../../assets/logo.png"
const Header = () => {
    return (
        <div className='text-center py-4 space-y-2'>
            <img className='mx-auto' src={Logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>

        </div>
    );
};

export default Header;