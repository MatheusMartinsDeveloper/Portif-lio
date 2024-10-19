import CardProject from "./CardProject";
import { FaArrowRight } from "react-icons/fa";
import ImageNullbank from "../../../public/screenshot_nullbank.png";
import ImageFashionHair from "../../../public/screenshot_fashionhair.png";
import Span from "./Span";

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
                <div className="container-projects-details">
                    <CardProject 
                        image={ImageNullbank}
                        category={`Frontend`}
                        name={`NullBank`}
                        paragraph={`O NullBank é uma página institucional moderna e responsiva projetada para um banco fictício.`}
                        tools={<> 
                            <Span name="NextJS" />
                            <Span name="Typescript" /> 
                            <Span name="Tailwindcss" /> 
                        </>
                        }
                        hrefProject={`https://nullbank-matheus.vercel.app`}
                        hrefCode={`https://github.com/MatheusMartinsDeveloper/Nullbank`}
                    />
                    <CardProject 
                        image={ImageFashionHair}
                        category={`Fullstack`}
                        name={`FashionHair`}
                        paragraph={`A FashionHair é um salão de beleza de feminina, com funcionalidade para clientes e o proprietário.`}
                        tools={<>
                            <Span name="NextJs" />
                            <Span name="Typescript" />
                            <Span name="TailwindCSS" />
                            <Span name="NestJS" />
                            <Span name="PostgreSQL" />
                            <Span name="Prisma" />
                            <Span name="Docker" />
                        </>}
                        hrefProject={``}
                        hrefCode={``}
                    />
                </div>
            </div>
        </section>
    );
}