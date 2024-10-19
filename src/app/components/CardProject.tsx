import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Span from "./Span";

type CardProjectProps = {
    image: StaticImageData;
    category: string;
    name: string;
    paragraph: string;
    tools: React.ReactNode;
    hrefProject: string;
    hrefCode: string;
}

export default function CardProject({ image, category, name, paragraph, tools, hrefProject, hrefCode }: CardProjectProps) {
    return (
        <div className="container-card-projects">
            <div className="container-image">
                <Image className="image"
                    src={image}
                    alt="Imagem do Projeto"
                    quality={100}  
                />
            </div>
            <div className="container-infos">
                <div className="div-category">
                    <Span name={category} />
                </div>
                <div className="div-title">
                    <h2>{name}</h2>
                </div>
                <div className="div-paragraph">
                    <p>{paragraph}</p>
                </div>
                <div className="div-tools">
                    {tools}
                </div>
                <div className="div-links">
                    <Link className="link" href={hrefProject} target="_blank">Ver o projeto</Link>
                    <Link className="link" href={hrefCode} target="_blank">Ver o código</Link>
                </div>
            </div>
        </div>
    );
}