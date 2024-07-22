import Image from "next/image";

export function ButtonFaqs({titreButtonFaqs, paragraphFaqs}) {
return (
        // <div className="">
        //     <button className={`px-[10px] md:px-[15px] h-[29px] w-auto md:text-[20px] md:h-[52px] text-[12px] text-white rounded-[20px] ${color}`}>{titreButton}</button>
        // </div>
    <div class="max-w-lg mx-auto p-2">
        <details className="groupe py-4 open:bg-[#61b6c7] bg-[#012d36] open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="leading-6 text-white dark:text-white font-semibold flex w-full cursor-pointer select-none items-center justify-between text-left text-base">
            {titreButtonFaqs}
                <svg className=" mt-0.5 h-8 w-8 md:w-[30px] flex-none stroke-[#61b6c7]" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path className="" d="M12 6v12"></path>
                    <path className="open:flex" d="M20 12H6"></path>
                </svg>
            </summary>
            <div className="pb-6 pt-6 bg-[#61b6c7]">
                <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p className="text-white">
                    {paragraphFaqs}                    </p>
                </div>
            </div>
        </details>
    </div>
    

    
    //     <summary class="text-sm leading-6 text-white dark:text-white font-semibold select-none">
    //       Why do they call it Ovaltine?
    //     </summary>
    //     <div class="mt-3 text-sm leading-6 text-white dark:text-slate-400">
    //       <p>The mug is round. The jar is round. They should call it Roundtine.</p>
    //    
    );
}
