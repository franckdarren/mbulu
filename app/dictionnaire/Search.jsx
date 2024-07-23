import Image from "next/image";


export function Search() {
    return (
        <div className=" flex flex-row">
            <input type="text" name="" id="" className="border border-black w-[200px] rounded-l-lg md:w-full peer"/> 
            <Image
            src="/assets/tabler_search.svg"
            alt=""
            width={30}
            height={30}
            className="h-auto border border-black bg-[#164048] rounded-r-lg"
            />
            
            
        </div>
    );
}
