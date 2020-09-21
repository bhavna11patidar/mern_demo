import React, { useState }  from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default function Header(props) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Navbar color="light" light expand="md">
    <NavbarBrand href="/">reactstrap {props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task">Task</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register-hooks">Register Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hooks">Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/todo-state">To Do State</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/counter1">Counter 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/counter2">Counter 2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}
