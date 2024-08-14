export function Button({titreButton, color}) {
    return (
        <div className="">
            <button className={`px-[10px] flex items-center justify-center py-auto md:px-[15px] h-[29px] w-auto md:text-[16px] md:h-[38px] text-[12px] text-white rounded-[20px] ${color}`}>{titreButton}</button>
        </div>
    );
}
