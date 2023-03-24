import React from 'react'
import { ContainerCards , Imagem} from './styled'




export default function Cards() {
	return (
        <ContainerCards>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat est arcu, sed vulputate tortor volutpat eget.</p>
		<Imagem src={"https://image.freepik.com/vetores-gratis/icone-de-perfil-de-pessoas_24877-40756.jpg"} alt="foto"/>
	</ContainerCards>
    )
}