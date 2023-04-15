import Image from "next/image";
import schedule from "../public/schedule.png";

export default function Schedule() {
    return (
        <section className="w-full bg-slate-900 py-16">
            <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4 items-start">
                <Image src={schedule} alt="schedule"/>
            </div>
        </section>
    );
}
