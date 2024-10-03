import CardSectionSkills from "./CardSectionSkills";
import Span from "./Span";

export default function SectionSkills() {
    return (
        <section className="section-skills" id="habilidades">
            <div className="div-container">
                <div className="div-span">
                    <span>Habilidades</span>
                </div>
                <div className="div-title">
                    <h1>Habilidades e Experiência</h1>
                </div>
                <div className="div-container-second">
                    <div className="div-container-paragraph">
                        <p>Com uma base sólida em tecnologias de front-end e back-end, trago para a mesa um conjunto versátil de habilidades. Minha proficiência em HTML, CSS e JavaScript me permite criar interfaces envolventes que se integram perfeitamente a sistemas back-end robustos.</p>
                        <p>Além disso, minha experiência em projetos pessoais me permitiu explorar soluções criativas e aprimorar meu conhecimento prático das melhores práticas.</p>
                        <p>Mantendo-me atualizado, estou bem equipado para contribuir com projetos inovadores e proporcionar interações excepcionais aos usuários.</p>
                    </div>
                    <div className="div-card">
                        <CardSectionSkills
                            title={`Frontend`}
                            skills={
                                <>
                                    <Span name="html" />
                                    <Span name="css" />
                                    <Span name="javascript" />
                                    <Span name="sass" />
                                    <Span name="tailwind css" />
                                    <Span name="typescript" />
                                    <Span name="react js" />
                                    <Span name="next js" />
                                </>
                            }
                        />
                        <CardSectionSkills
                            title={`Backend`}
                            skills={
                                <>
                                    <Span name="nodejs" />
                                    <Span name="typescript" />
                                    <Span name="express" />
                                    <Span name="nest js" />
                                    <Span name="postgresql" />
                                    <Span name="mongodb" />
                                    <Span name="prisma" />
                                </>
                            }
                        />
                        <CardSectionSkills
                            title={`Ferramentas`}
                            skills={
                                <>
                                    <Span name="git" />
                                    <Span name="github" />
                                    <Span name="docker" />
                                    <Span name="vs code" />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </section>
    );
}