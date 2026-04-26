import Marquee from "react-fast-marquee";

const news = [
    { "id": 1, "title": "Breaking News: Global Markets See Significant Growth Amid Economic Recovery" },
    { "id": 2, "title": "Breaking News: New Technology Trends Shaping the Future of AI in 2026" },
    { "id": 3, "title": "Breaking News: Climate Change Initiatives Gain Momentum Worldwide" },
    { "id": 4, "title": "Breaking News: Breakthrough in Renewable Energy Reduces Costs Dramatically" },
    { "id": 5, "title": "Breaking News: Education Sector Adopts Digital Transformation at Rapid Pace" },
    { "id": 6, "title": "Breaking News: Healthcare Innovations Improve Patient Outcomes Globally" },
    { "id": 7, "title": "Breaking News: Space Exploration Missions Expand Beyond the Solar System" },
    { "id": 8, "title": "Breaking News: Cybersecurity Concerns Rise with Increased Online Activities" },
    { "id": 9, "title": "Breaking News: Startups Drive Economic Growth in Emerging Markets" },
    { "id": 10, "title": "Breaking News: Smart Cities Initiative Enhances Urban Living Standards" }
]

const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 container mx-auto">
            <button className="btn bg-pink-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n => {
                        return <span key={n.id} className="mr-10">{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;