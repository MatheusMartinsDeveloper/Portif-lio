import Span from "./Span";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SectionContact() {
    return (
        <section className="section-contact" id="contato">
            <div className="div-container">
                <div className="div-span">
                    <Span name="contato" />
                </div>
                <div className="div-title-span">
                    <h1>Eu gostaria de trabalhar com você</h1>
                    <div>
                        <span className="circle"></span><span>Disponível, por agora...</span>
                    </div>
                </div>
                <div className="div-title-second">
                    <h2>matheus2005brr@gmail.com</h2>
                </div>
                <div className="div-contact">
                    <a target="_blank" href="https://www.linkedin.com/in/matheus-martins-7631571a1/"><span><FaLinkedinIn className="icon" /> Linkedin</span></a>
                    <a target="_blank" href="https://github.com/dashboard"><span><FaGithub className="icon" /> Github</span></a>
                    <a target="_blank" href=""><span><SiGmail className="icon" /> G-mail</span></a>
                </div>
            </div>
            <div className="line"></div>
        </section>
    );
}