export function Dictionnaire({titre, expression, other}){
    return(
        <div className="ml-[50px]">
            <ul className="text-[30px] font-bold text-[#164048]">
                <li>{titre}</li>
            </ul>
            <ul className="ml-[50px] text-[30px] font-normal">
                <li>{expression}</li>
                <li>{expression}</li>
            </ul>
            <ul className="ml-[109px] text-[30px] font-normal">
                <li>{other}</li>
                <li>{other}</li>
            </ul>
        </div>
    );
}