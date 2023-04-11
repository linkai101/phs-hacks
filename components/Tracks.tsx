import { Text } from "@chakra-ui/react";
import Image from "next/image";
import Icon from "@mdi/react";
import {
    mdiRocketLaunch,
    mdiLightbulbNight,
    mdiShieldMoonOutline,
} from "@mdi/js";


export default function Tracks() {
    return (
        <section className="w-full bg-slate-900 py-16">
            <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4 items-start">
                <Text as="h1" className="text-4xl font-semibold">
                    Tracks
                </Text>
                <div className="flex gap-4 md:flex-nowrap flex-wrap">
                    <div className="border-2 border-white rounded-lg p-4 w-full flex flex-col items-center">
                        <Icon path={mdiRocketLaunch} size={8} />
                        <Text as="h2" className="text-3xl font-semibold">
                            Our World
                        </Text>
                        <Text className="text-2xl text-center">
                            Environmentally focused or centered around peoples
                            lives
                        </Text>
                    </div>
                    <div className="border-2 border-white rounded-lg p-4 w-full flex flex-col items-center">
                        <Icon path={mdiLightbulbNight} size={8} />
                        <Text as="h2" className="text-3xl font-semibold">
                            Into the Unknown
                        </Text>
                        <Text className="text-2xl text-center">
                            Explore topics and tools that might be impactful for
                            our future
                        </Text>
                    </div>
                    <div className="border-2 border-white rounded-lg p-4 w-full flex flex-col items-center">
                        <Icon path={mdiShieldMoonOutline} size={8} />
                        <Text as="h2" className="text-3xl font-semibold">
                            Beginner
                        </Text>
                        <Text className="text-2xl text-center">
                            First-time hackers only!
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    );
}
