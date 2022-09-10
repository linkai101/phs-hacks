import { Text, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import team from "../public/data/team.json";

const Member = ({
    name,
    image,
    pronouns,
    title,
    url,
}: {
    name: string;
    image: string;
    pronouns: string;
    title: string;
    url?: string;
}) => {
    return (
        <div className="max-w-[200px] flex items-start justify-start gap-3">
            <Avatar name={name} src={image} size="md" />
            <div>
                <a className="text-lg" href={url}>
                    {name}
                </a>
                <h2 className="text-sm text-slate-400">
                    {title}<br/>{pronouns}
                </h2>
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <section className="w-full bg-slate-900 py-16">
            <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4 items-center">
                <Text as="h1" className="text-4xl font-semibold">
                    Team
                </Text>
                <div className="grid grid-cols-5 auto-rows-[100px] gap-8">
                    {team.map((member) => (
                        <Member
                            key={member.name}
                            name={member.name}
                            image={member.image}
                            pronouns={member.pronouns}
                            title={member.title}
                            url={member.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
