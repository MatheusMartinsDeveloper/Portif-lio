import CardSectionAbout from "./CardSectionAbout"
import { FaCode } from "react-icons/fa";
import { LuServer } from "react-icons/lu";

export default function SectionAbout() {
    return (
        <section className="section-about">
            <div className="div-container">
                <div className="div-span">
                    <span>Sobre Mim</span>
                </div>
                <div className="div-title">
                    <h1> Eu sou <div></div> Matheus Martins. <br /> Um Desenvolvedor FullStack</h1>
                </div>
                <div className="div-paragraph">
                    <p>Eu vivo no estado de São Paulo, Brasil, eu tenho 19 anos de idade. Eu estudo Sistemas de Informação <br />
                        na UNIFEB em Barretos. Todos os dias eu procuro me aprofundar cada vez mais no mundo da tecnologia, <br />
                        seja construindo sistemas ou resolvendo desafios. E estou sempre animado em explorar todas as possibilidades
                        nesse campo!
                    </p>
                </div>
                <div className="div-container-card">
                    <CardSectionAbout
                        icon={<FaCode />}
                        title={`Front End`}
                        paragraph={<>Traduzo designs em código utilizando diversas tecnologias, <br />
                        além de criar micro interações e garantir visibilidade em diferentes telas.</>}
                    />
                    <CardSectionAbout
                        icon={<LuServer />}
                        title={`Back End`}
                        paragraph={<>Construo a estrutura do sistema, gerenciando dados e funcionalidades de forma eficiente. <br />
                        Minha codificação robusta e testes rigorosos garantem um desempenho confiável, permitindo que a interface brilhe. </>}
                    />
                </div>
            </div>
        </section>
    )
}