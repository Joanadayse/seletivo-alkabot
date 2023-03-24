import React from 'react'
import { ContainerHeader } from '../styled'
import logo from "../../logo/logo.png"


export default function Header() {
	return (
        <ContainerHeader>
		{/* <p>Cabecalho</p> */}
		<img src={logo} alt="logo"/>
	</ContainerHeader>
    )
}