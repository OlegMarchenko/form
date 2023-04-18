import './Header.scss'
function Header({ title, avatar }) {

  return (
    <header className='header'>
      {title}: {avatar}
    </header>
  )
}

export default Header;