import { Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Prizes() {
    const images = [
        "/prizes/airtag.png",
        "/prizes/kazoo.png",
        "/prizes/pencils.png",
        "/prizes/powerbank.png",
        "/prizes/razervipermini.png",
        "/prizes/soundcore.png",
        "/prizes/wacomone.png",
        "/prizes/keyboard.png",
    ];
    return (
        <section className="w-full bg-slate-900 py-16">
            <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4 items-start">
                <Text as="h1" className="text-4xl font-semibold">
                    Prize Pool
                </Text>
                <div className="flex gap-2 p-4 border-4 border-white rounded-lg">
                    {images.map((image) => (
                        <Image src={image} key={image} width={200} height={200} objectFit="contain" alt={image}>
                            
                        </Image>
                    ))}
                </div>
            </div>
        </section>
    );
}
