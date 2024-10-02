type CardSectionSkillsProps = {
    title: string;
    skills: React.ReactNode;
}

export default function CardSectionSkills({ title, skills }: CardSectionSkillsProps) {
    return (
        <div className="div-container-card">
            <h2>{title}</h2>
            <div>
                {skills}
            </div>
        </div>
    );
}