import Navigation from "./Navigation";

const Header = () => {

  let NavigationLinks = [
    { name: "HOME", link: "/" },
    { name: "TESTIMONIALS", link: "/testimonials" },
    { name: "CLIENTS", link: "/clients" },
    { name: "CONTACT", link: "/contact" },
  ];

  return <Navigation links={NavigationLinks} />;
};

export default Header;
