import {
    HomeCategories,
    HomeHero,
    HomeNewProducts,
    Newsletter
} from "@/widgets";

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeNewProducts />
            <HomeCategories />
            <Newsletter />
        </>
    );
}
