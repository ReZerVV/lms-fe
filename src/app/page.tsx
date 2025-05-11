import {
    HomeCategories,
    HomeHero,
    HomeNewProducts,
    Newsletter
} from "@/widgets";
import HomeRoadmaps from "@/widgets/HomePage/HomeRoadmaps/HomeRoadmaps";

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeCategories />
            <HomeRoadmaps />
            <HomeNewProducts />
            <Newsletter />
        </>
    );
}
