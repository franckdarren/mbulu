import { CoursCard } from "./CoursCard";

export function CoursListe() {
    return (
        <div class="lg:flex lg:flex-col gap-2 mt-[30px] lg:items-center lg:justify-center lg:bg-cover lg:bg-center" style={{ backgroundImage: 'url(/assets/bgtheme.png)' }}>
            <div class="lg:flex lg:flex-row gap-4 ">
                <CoursCard />
                <CoursCard />
                <CoursCard />
            </div>
            <div class="lg:flex lg:flex-row gap-4">
                <CoursCard />
                <CoursCard />
                <CoursCard />
            </div>
        </div>
    );
}
