import Image from "next/image";


export function Search() {
    return (
        <div className=" flex">
            <input type="text" name="" id="" className="border border-black w-[200px] rounded-l-lg md:w-full md:max-w-[600px]"/> 
            <Image
            src="/assets/tabler_search.svg"
            alt=""
            width={30}
            height={30}
            className="h-auto w-10 p-1 border border-black bg-[#164048] rounded-r-lg"
            />
            
            
        </div>
    );
}
