export function AdminButton({ titreButton, color }) {
    return (
        <div className="flex justify-end">
            <button className={`p-2 mb-2 text-sm  text-white rounded-md ${color}`}>{titreButton}</button>
        </div>
    );
}
