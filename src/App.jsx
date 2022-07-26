import { ReactDOM } from "react";
import About from "./components/about/About";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testemonials from "./components/testemonials/Testemonials";


const App =() => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Certification />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App