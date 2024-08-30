
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getUserFromDatabase } from "../../../services/userServices";
import { contributionUserApprouve, contributionUserAttente, getCountContributionUserFromDatabase } from "../../../services/contributionServices";


export default async function Profil() {
    const { userId } = auth();

    const data = await getUserFromDatabase(userId);
    const contributionApprouve = await contributionUserApprouve(data);
    const contributionAttente = await contributionUserAttente(data);
    const contributionTotale = await getCountContributionUserFromDatabase(data);


    return (
        <>
            <div class="flex flex-col justify-center items-center md:px-[10%]">
                <div class="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
                    <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                        <Image
                            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                            alt="Image de l'utilisater"
                            width={100}
                            height={100}
                            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                        />
                        <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <Image
                                src={data?.image}
                                alt="Image de l'utilisater"
                                width={100}
                                height={100}
                                className="h-full w-full rounded-full"
                            />
                        </div>
                    </div>
                    <div class="mt-16 flex flex-col items-center">
                        <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                            {data.name}
                        </h4>
                        <p class="text-base font-normal text-gray-600">{data.role}</p>
                    </div>
                    <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700 dark:text-white">{contributionTotale}</p>
                            <p class="text-sm font-normal text-gray-600">Contributions totales</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700 dark:text-white">{contributionApprouve}</p>
                            <p class="text-sm font-normal text-gray-600">Approuvées</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700 dark:text-white">{contributionAttente}</p>
                            <p class="text-sm font-normal text-gray-600">En attentes</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}