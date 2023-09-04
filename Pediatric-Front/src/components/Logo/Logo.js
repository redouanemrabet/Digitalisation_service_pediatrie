import logo from 'assets/images/logo.png';
import MiaLogo from 'assets/images/MiaLogo.png';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        <>
            <img src={logo} alt="CHU Oujda" width="100" />
            <img src={MiaLogo} alt="Mia Oujda" width="100" height="75" />

        </>
    );
};

export default Logo;
