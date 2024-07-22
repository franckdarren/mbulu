export function ButtonFaqs() {
return (
        // <div className="">
        //     <button className={`px-[10px] md:px-[15px] h-[29px] w-auto md:text-[20px] md:h-[52px] text-[12px] text-white rounded-[20px] ${color}`}>{titreButton}</button>
        // </div>
    <div class="max-w-lg mx-auto p-8">
        <details className="py-4 open:bg-[#61b6c7] bg-[#539FAF] open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary className="leading-6 text-white dark:text-white font-semibold flex w-full cursor-pointer select-none items-center justify-between text-left text-base">
                Are Figma, Sketch, or Adobe XD files included?
                <svg className=" mt-0.5 h-8 w-8 md:w-[30px] flex-none stroke-white open:stroke-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path class="open:bg-[#61b6c7]" d="M12 6v12"></path>
                    <path className="open:flex" d="M20 12H6"></path>
                </svg>
            </summary>
            <div className="pb-6 pt-6 bg-[#61b6c7]">
                <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
                    <p className="text-white">
                        We don't produce high-quality design artifacts as part of our own design and development process, so building these extra resources means we can't spend as much time creating new examples in code which is where we believe we can provide the most value.
                    </p>
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
