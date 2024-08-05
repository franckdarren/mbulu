import { CoursCard } from "./CoursCard";

export function CoursListe() {
    return (
        <div className="lg:flex lg:flex-col gap-2 mt-[30px] lg:items-center lg:justify-center lg:bg-cover lg:bg-center" style={{ backgroundImage: 'url(/assets/bgtheme.png)' }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
                <CoursCard theme="Salutation" lesson="Leçons: 10" ImageCours={"/assets/talk.gif"} />
                <CoursCard theme=" localisation " lesson="Leçons: 5" ImageCours={"/assets/City walk.gif"} />
                <CoursCard theme="Emotion & Sentiment " lesson="Leçons: 10" ImageCours={"/assets/téléchargement.gif"}/>
                <CoursCard theme="Expression Quotidien" lesson="Leçons: 10" ImageCours={"/assets/Ebook Logo.gif"} />
                <CoursCard theme="Temps & Météo" lesson="Leçons: 15" ImageCours={"/assets/The Time.gif"}/>
                <CoursCard theme="Corps Humain" lesson="Leçons: 2" ImageCours={"/assets/Self-care Checklist.gif"}/>
            </div>
        </div>
    );
}
