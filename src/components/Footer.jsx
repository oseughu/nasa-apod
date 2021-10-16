const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <ul className="link">Ose Ughu &copy; {currentYear}</ul>
    </footer>
  );
};

export default Footer;
