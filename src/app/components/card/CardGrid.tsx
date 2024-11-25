import type { BlogPostDocument } from "../../../../prismicio-types";
import Card from "./Card";


export interface CardGridProps {
    cards: BlogPostDocument<string>[]
}

const CardGrid = ({ cards }: CardGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8 max-w-7xl mx-auto">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default CardGrid;