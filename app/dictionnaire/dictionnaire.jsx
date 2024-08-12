

export function Dictionnaire({titre, text, other}){
    return(
        <div className="mx-[100px] my-[25px] bg-amber-50 border rounded-xl px-6 py-2">
            <ul>
                <li className="text-[20px] md:text-[30px] font-bold text-[#164048]">{titre}</li>
                <ul className="ml-[20px]  my-[20px] text-[20px] md:text-[30px] font-medium">
                    <li>{text}</li>
        
                </ul>
                <ul className="ml-[50px] text-[30] font-medium ">
                    <li>{other}</li>
     
                </ul>
            </ul>

        </div>

    );
}