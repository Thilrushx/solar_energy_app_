import { Navbar, Container } from "react-bootstrap";

const Footer = () => { 
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom"> 
         <Container>    
            <p className="text-white">This is the end of App</p>

         </Container>
         </Navbar>
    );
};

export default Footer;