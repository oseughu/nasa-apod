const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <ul className='link'>&copy; Ose Ughu {currentYear}</ul>
    </footer>
  )
}

export default Footer
