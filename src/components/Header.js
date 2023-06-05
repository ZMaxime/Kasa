import '../styles/Header.css'
import Logo from '../assets/logo.png'
import Nav from './Nav'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Nav />
		</header>
	)
}