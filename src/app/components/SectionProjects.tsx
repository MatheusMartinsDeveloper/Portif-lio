import { FaArrowRight } from "react-icons/fa";

export default function SectionProjects() {
    return (
        <section className="section-projects" id="projetos">
            <div className="div-container">
                <div className="div-span">
                    <span>Projetos</span>
                </div>
                <div className="div-container-second">
                    <div className="div-container-left">
                        <h1>Projetos em destaque</h1>
                        <span>Saiba mais sobre o que estou fazendo</span>
                    </div>
                    <div className="div-container-right">
                        <a target="_blank" href="https://github.com/dashboard">
                            <FaArrowRight className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}