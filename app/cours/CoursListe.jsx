import { CoursCard } from "./CoursCard";

export function CoursListe() {
    return (
        <div class="lg:flex lg:flex-col gap-2 mt-[30px] lg:items-center lg:justify-center lg:bg-cover lg:bg-center" style={{ backgroundImage: 'url(/assets/bgtheme.png)' }}>
            <div class="lg:flex lg:flex-row gap-4 ">
                <CoursCard theme="Salutation" lesson="Leçons: 10" />
                <CoursCard theme=" localisation " lesson="Leçons: 5" />
                <CoursCard theme="Emotion & Sentiment " lesson="Leçons: 10" />
            </div>
            <div class="lg:flex lg:flex-row gap-4">
                <CoursCard theme="Expression Quotidien" lesson="Leçons: 10" />
                <CoursCard theme="Temps & Météo" lesson="Leçons: 15" />
                <CoursCard theme="Corps Humain" lesson="Leçons: 2" />
            </div>
        </div>
    );
}
