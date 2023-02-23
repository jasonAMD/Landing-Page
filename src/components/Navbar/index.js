// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar

import React from 'react'
import { FaBars } from "react-icons/fa";
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to=''>AMD</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='athena'>Athena</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='performance'>Performance</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='vanguard'>Vanguard</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='signup'></NavLinks>
                    </NavItem> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Admin Login</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar