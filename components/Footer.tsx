const Footer = () => {
  const date = new Date();

  return (
    <footer className="max-w-screen-lg flex justify-center items-center w-full h-10	bg-emerald-500 text-color-900 rounded-bl-lg rounded-br-lg">
      Peter Tumulty ©️ {date.getFullYear()}
    </footer>
  );
};

export default Footer;
