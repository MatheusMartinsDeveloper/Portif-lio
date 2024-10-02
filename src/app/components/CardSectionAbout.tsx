
type CardSectionAboutProps = {
    icon: React.ReactNode;
    title: string;
    paragraph: React.ReactNode;
}

export default function CardSectionAbout({ icon, title, paragraph }: CardSectionAboutProps) {
    return (
        <div className="div-card">
            <div>
                <div className="div-icon">{icon}</div>
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}