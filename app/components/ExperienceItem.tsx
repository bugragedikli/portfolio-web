interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
    return (
        <div className="pb-4 border-b border-gray-700 last:border-0">
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold font-jakarta">{title}</h4>
                <span className="font-jetbrains text-xs text-gray-500">{period}</span>
            </div>
            <p className="text-gray-500 font-jetbrains text-sm mb-2">{company}</p>
            <p className="text-gray-400 font-jakarta text-sm">{description}</p>
        </div>
    );
}
