import { FaHeart } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <footer>
            <div className="div-container">
                <div className="div-span">
                    <span>Matheus dos Reis Silva Martins</span>
                </div>
                <div className="div-span-second">
                    <span>Feito com <FaHeart className="icon" /> por Matheus</span>
                </div>
                <div className="div-span-third">
                    <a href="https://www.linkedin.com/in/matheus-martins-7631571a1/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://github.com/MatheusMartinsDeveloper" target="_blank"><FaGithub /></a>
                    <a href="" target="_blank"><SiGmail /></a>
                </div>
            </div>
        </footer>
    );
}