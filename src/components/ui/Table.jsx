export default function Table() {
    const tableName = ["UNIT",
        "RUANG MEETING",
        "KAPASITAS",
        "TANGGAL RAPAT",
        "WAKTU",
        "JUMLAH PESERTA",
        "JENIS KONSUMSI"];

    return (
        <div className="bg-white">

        <table className="table-auto">
            <thead className="bg-gray-100 h-16 gap-10">
            {tableName.map((name, idx) => (
                <th key={idx} className="px-4 py-2">{name}</th>
                ))
            }
            </thead>
            <tbody>
            <tr className="bg-white">

            </tr>
            </tbody>
        </table>
        </div>
    )
}