import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../App'
import { Link, Router } from "react-router-dom";
import RouteSwitch from '../RouteSwitch'
describe("Navbar component", ()=>{
    it ("renders navbar correctly", ()=>{
        const {container} = render(<RouteSwitch/>)
        expect(container).toMatchSnapshot();
    })
})