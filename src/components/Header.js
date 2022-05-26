import styled from 'styled-components';
import logo from '../img/TrackIt.png'

function Header() {
    return (
        <Topo>
            <Logo src={logo} alt='logo'/>
            <Img src='https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg' alt='profile'/>
        </Topo>
    );
}

const Topo = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
    z-index: 1;
`

const Logo = styled.img`
    height: 35px;
    width: 100px;
    margin-left: 20px;
`

const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
`

export default Header;