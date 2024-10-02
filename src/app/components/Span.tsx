type SpanProps = {
    name: string;
}

export default function Span({ name }: SpanProps) {
    return (
        <span className="span-component">{name}</span>
    );
}