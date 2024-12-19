import { useForm } from "react-hook-form";
import Button from "../ui/Button.jsx";

export default function FormInput ({name}){
    const {
        register,
        handleSubmit,

    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    };

    return (
        <div className="flex flex-col w-11/12 justify-center">
            <form>

                <h1 className="font-bold text-lg text-start m-5">Informasi Ruang Meeting</h1>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Unit</label>
                            <select
                                className="h-10 bg-white border-gray-100 border-2 " {...register("unit", {required: true})}>
                                <option value="">Pilih Unit</option>
                                <option value="Unit 1">Unit 1</option>
                                <option value="Unit 2">Unit 2</option>
                            </select>
                        </div>

                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Ruang Meeting</label>
                            <select
                                className="h-10 bg-white border-gray-100 border-2 " {...register("ruangMeeting", {required: true})}>
                                <option value="">Pilih Ruangan Meeting</option>
                                <option value="Ruang 1">Ruang 1</option>
                                <option value="Ruang 2">Ruang 2</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                        <label className="font-bold">Kapasitas</label>
                        <input className="h-10 border-gray-100 border-2 " type="text" {...register("capacity")} disabled
                               placeholder="Kapasitas Ruangan"/>
                    </div>

                </div>

                <h1 className="font-bold text-lg text-start m-5">Informasi Rapat</h1>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                    <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Tanggal Rapat*</label>
                            <input type="date" {...register("date", {required: true})} />

                        </div>

                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Waktu Mulai</label>
                            <input type="time" />

                        </div>

                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Waktu Selesai</label>
                            <input type="time" />

                        </div>
                    </div>

                    <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Jumlah Peserta</label>
                            <input type="number" {...register("members", {required: true})}
                                   placeholder="Masukan Jumlah Peserta"/>

                        </div>

                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Jenis Konsumsi</label>
                            <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                                <label>
                                    <input type="checkbox" {...register("consumtion.snackSiang")} /> Snack Siang
                                </label>
                            </div>
                            <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                                <label>
                                    <input type="checkbox" {...register("consumtion.makanSiang")} /> Makan Siang
                                </label>
                            </div>
                            <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                                <label>
                                    <input type="checkbox" {...register("consumtion.snackSore")} /> Snack Sore
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start w-80 mx-5 gap-5 text-start">
                            <label className="font-bold">Nominal Konsumsi</label>
                            <input type="number" {...register("nominalKonsumsi", {required: true})} placeholder="Rp."/>

                        </div>
                </div>

                <div>
                            <Button name="Batal" onClick={() => alert("Form dibatalkan")}/>
                            <Button type="submit" name="Simpan"/>
                        </div>
            </form>
        </div>
);
};
