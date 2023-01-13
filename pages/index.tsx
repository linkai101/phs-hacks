import type { NextPage } from "next";
import Layout from "../components/Layout";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
} from "@chakra-ui/react";
import { mdiMapMarker } from "@mdi/js";
import { Icon } from "@mdi/react";
import Loading from "../components/Loading";
import * as THREE from "three";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import AssembleImage from "../public/assemble.jpg";
import Link from "next/link";
import FAQ from "../public/data/faq.json";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Team from "../components/Team";
import Sponsors from "../public/data/sponsors.json";
import WithSupportFrom from "../public/data/withsupportfrom.json";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const bar = useRef<HTMLDivElement>(null);

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        const canvas = ref.current;
        if (!mediaQuery || mediaQuery.matches) {
            setLoading(false);
            if (canvas) {
                canvas.style.display = "none";
            }
        } else {
            if (localStorage.getItem("loaded")) {
                setLoading(false);
                setTimeout(() => {
                    bar.current?.classList.add("hidden");
                }, 1000);
            } else {
                bar.current?.classList.add("hidden");
                setTimeout(() => {
                    localStorage.setItem("loaded", "true");
                    setLoading(false);
                }, 3000);
            }
        }

        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.8;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / (window.innerHeight * 0.8),
                0.1,
                1000
            );
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 0;
            const stars: THREE.Mesh<
                THREE.SphereGeometry,
                THREE.MeshBasicMaterial
            >[] = [];
            const starsGroup = new THREE.Group();
            starsGroup.clear();
            scene.clear();
            const addParticles = () => {
                const geometry = new THREE.SphereGeometry(
                    Math.random() * (0.02 - 0.01) + 0.01,
                    12,
                    12
                );
                const material = new THREE.MeshBasicMaterial({
                    color: 0xfff3c9,
                });
                const particle = new THREE.Mesh(geometry, material);
                const [x, y, z] = [0, 0, 0].map(() =>
                    THREE.MathUtils.randFloatSpread(20)
                );
                particle.position.set(x, y, z);
                particle.material.color.setRGB(
                    THREE.MathUtils.randFloat(0.5, 1),
                    THREE.MathUtils.randFloat(0.5, 1),
                    1
                );
                starsGroup.add(particle);

                return particle;
            };
            for (var i = 0; i < 2000; i++) {
                var s = addParticles();
                stars.push(s);
            }

            scene.add(starsGroup);
            const renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: true,
            });

            camera.position.z = 5;
            const controls = new OrbitControls(camera, renderer.domElement);

            const animate = () => {
                requestAnimationFrame(animate);
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight * 0.8;

                starsGroup.rotateX(0.001);
                starsGroup.rotateY(0.001);
                controls.update();
                controls.enablePan = true;
                controls.enableZoom = false;
                renderer.render(scene, camera);
            };
            animate();
        }
    }, []);

    return (
        <>
            <div
                className="fixed top-0 w-screen h-screen bg-base z-50"
                ref={bar}
            ></div>
            <AnimatePresence>{loading && <Loading />}</AnimatePresence>

            <Layout>
                <section className="pt-40 min-h-[80vh] w-screen overflow-hidden relative">
                    <canvas
                        className="absolute top-0 left-0 z-0 cursor-grab"
                        ref={ref}
                    ></canvas>
                    <Text className="absolute font-bold top-30 md:top-40 -left-5 text-7xl md:text-[12rem] outlined text-transparent">
                        HACK
                    </Text>
                    <Text className="absolute font-bold top-[30rem] md:top-[30rem] -right-5 text-7xl md:text-[12rem] outlined text-transparent ">
                        POOLESVILLE
                    </Text>
                    <div className="relative z-10 top-10 md:top-40">
                        <div className="w-4/5 max-w-6xl mx-auto">
                            <div className="flex flex-col gap-1 border border-white max-w-fit p-8 bg-black">
                                <Text className="text-3xl sm:text-5xl font-semibold md:text-6xl">
                                    poolesville_<wbr></wbr>hacks 2
                                </Text>
                                <Text className="text-2xl font-light md:text-3xl">
                                    April 14th
                                </Text>
                                {/* <Text className="flex items-center text-xl md:text-2xl font-light">
                                    <Icon path={mdiMapMarker} size={1} />
                                    Poolesville Baptist Church
                                </Text> */}

                                <Link
                                    href="https://register.poolesvillehacks.tech/"
                                    target="_blank"
                                >
                                    <a
                                        className={`text-xl leading-none p-3 font-semibold mt-2 w-fit hidden text-center bg-white text-black border-2 border-black transition-all md:block hover:bg-black hover:text-white hover:border-2 hover:border-white`}
                                    >
                                        Register
                                    </a>
                                </Link>
                                <Text
                                    as="a"
                                    href="https://airtable.com/shrBuANlPHgAG93wD"
                                    className="font-light text-slate-400 underline text-xs mt-1"
                                    target="_blank"
                                >
                                    Too early to register? Get a reminder closer
                                    to the event.
                                </Text>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full bg-slate-900 py-32 border-t-4"
                    id="start"
                >
                    <div className="w-4/5 max-w-6xl mx-auto">
                        <Text className="text-2xl text-center">
                            Last spring, over{" "}
                            <span className="text-4xl font-medium">70</span>{" "}
                            high school students from all over the world
                            gathered virtually for poolesville_hacks 1. <br />{" "}
                            This fall, let&apos;s do it again,{" "}
                            <span className="text-4xl font-medium">
                                in-person
                            </span>
                            .
                        </Text>
                    </div>
                </section>
                <section className="w-full bg-slate-900 py-16">
                    <div className="w-4/5 max-w-6xl mx-auto">
                        <Text
                            as="h1"
                            className="text-4xl font-semibold scroll-mt-16"
                            id="about"
                        >
                            About
                        </Text>
                        <div className="flex gap-5 flex-wrap   mt-2">
                            <div className="flex flex-1 flex-col min-w-[300px] ">
                                <Text className="text-2xl">
                                    Hey hacker! Join us for our hackathon,
                                    poolesville_hacks 2! Wait, don&apos;t go! I
                                    know what you&apos;re thinking, we
                                    don&apos;t break into banks. Hacking is
                                    actually used as a term referring to a rough
                                    solution to a problem, so our super chill
                                    competition refers to a bunch of teams
                                    creating rough solutions to problems
                                    relating to a certain topic. <br />
                                    <br /> Over the course of a day, you&apos;ll
                                    spend time creating (or learning how to
                                    create) an awesome project, making a ton of
                                    friends, enjoying free food, and more!
                                </Text>
                            </div>
                            <div className="flex flex-1 min-w-[300px] flex-col  h-full">
                                <Image
                                    src={AssembleImage}
                                    className="rounded-lg"
                                    objectFit="cover"
                                    alt="Assemble, Hack Club's 2022 Summer Hackathon"
                                ></Image>
                                <Text className="text-slate-400 text-center">
                                    Assemble, Hack Club&apos;s 2022 Summer
                                    Hackathon
                                </Text>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-slate-900 py-16">
                    <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4">
                        <Text as="h1" className="text-4xl font-semibold">
                            Sponsors
                        </Text>
                        <Text as="h2" className="text-xl">
                            There would be absolutely no way we would be able to
                            run this event without our wonderful sponsors.
                        </Text>
                        <div className="flex flex-wrap gap-4">
                            {Sponsors.map((sponsor) => {
                                const getSize = (tier: string) => {
                                    if (!tier || tier === "iron") {
                                        return [200, 100];
                                    } else if (tier === "bronze") {
                                        return [300, 100];
                                    } else if (tier === "silver") {
                                        return [400, 200];
                                    } else if (tier === "gold") {
                                        return [500, 300];
                                    } else if (tier === "platinum") {
                                        return [600, 400];
                                    }
                                    return [200, 100];
                                };
                                const dimensions = getSize(sponsor.tier);
                                return (
                                    <a
                                        href={sponsor.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={sponsor.name}
                                    >
                                        <Image
                                            src={`/sponsors/${sponsor.path}`}
                                            className="rounded-lg"
                                            objectFit="contain"
                                            alt={sponsor.name}
                                            width={dimensions[0]}
                                            height={dimensions[1]}
                                        ></Image>
                                    </a>
                                );
                            })}
                        </div>
                        <Text as="h1" className="text-3xl font-semibold">
                            With support from
                        </Text>
                        <div className="flex flex-wrap gap-4">
                            {WithSupportFrom.map((sponsor) => (
                                <a
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={sponsor.name}
                                >
                                    <Image
                                        src={`/sponsors/withsupportfrom/${sponsor.path}`}
                                        className="rounded-lg"
                                        objectFit="contain"
                                        alt={sponsor.name}
                                        width="200"
                                        height="100"
                                    ></Image>
                                </a>
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-center flex-col text-xl">
                            Interested in sponsoring? Check out our prospectus!
                            <Link href="/prospectus.pdf" target="_blank">
                                <a
                                    className={`text-xl leading-none p-3 font-semibold mt-2 w-fit hidden text-center bg-white text-slate-900  border-2 border-slate-900 transition-all md:block hover:bg-slate-900 hover:text-white hover:border-2 hover:border-white`}
                                >
                                    Sponsorship Prospectus
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-slate-900 py-16">
                    <div className="w-4/5 max-w-6xl mx-auto flex flex-col gap-4 items-center">
                        <Text as="h1" className="text-4xl font-semibold">
                            FAQ
                        </Text>
                        <Accordion className="w-full" allowToggle={true}>
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.q}>
                                    <AccordionButton>
                                        <Text className="text-2xl">
                                            {faq.q}
                                        </Text>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <Text className="text-xl">{faq.a}</Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
                <Team />
            </Layout>
        </>
    );
};

export default Home;
