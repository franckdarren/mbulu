export function Dictionnaire({ titre, traduction, langue }) {
    return (
        <div className="pr-[300px] pl-4 my-[25px] bg-amber-50 border rounded-xl py-2 ">
            <ul className="">
                <li className="text-[20px] md:text-[30px] font-bold text-[#164048] text-left">{titre}</li>
                <ul className="ml-[20px]  my-[7px] text-[20px] md:text-[25px] font-medium">
                    <li>{traduction}</li>
                </ul>
                <ul className="ml-[50px] text-[30] font-medium ">
                    <li>{langue}</li>
                </ul>
            </ul>

        </div>

    );
}