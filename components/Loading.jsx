import { useEffect, useRef, useState } from "react";
import * as Three from "three";
import { Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Loading = () => {
    const canvas = useRef(null);
    useEffect(() => {
        const scene = new Three.Scene();
        //Camera, 75 FOV
        const camera = new Three.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        //Create new renderer and intialize on the canvas node with ID 'bg'
        const renderer = new Three.WebGLRenderer({
            canvas: canvas.current,
            antialias: true,
            logarithmicDepthBuffer: true,
        });
        //Adjust the size of the renderer
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000107);
        //Move the camera
        camera.position.setZ(0);
        camera.position.setY(0);
        camera.position.setX(0);

        //Add Particles
        function addParticles() {
            const geometry = new Three.SphereGeometry(0.05, 24, 24);
            const material = new Three.MeshBasicMaterial({ color: 0xfff3c9 });
            const particle = new Three.Mesh(geometry, material);
            const [x, y, z] = Array(3)
                .fill()
                .map(() => Three.MathUtils.randFloatSpread(100));
            particle.position.set(x, y, z);
            particle.material.color.setRGB(
                Three.MathUtils.randFloat(0.5, 1),
                Three.MathUtils.randFloat(0.3, 0.7),
                0
            );
            scene.add(particle);
            return particle;
        }
        var stars = [];

        for (var i = 0; i < 2000; i++) {
            var s = addParticles();
            stars.push(s);
        }

        //Variables for mouse detection

        var i = 0;

        function renderScene() {
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);

            //rotate stars
            stars.forEach((star) => {
                star.translateZ(0.4);
                if (star.position.z > 50) {
                    star.translateZ(-100);
                    star.material.color.setRGB(
                        Three.MathUtils.randFloat(0.5, 1),
                        Three.MathUtils.randFloat(0.5, 1),
                        0
                    );
                }
            });
        }

        renderScene();
    }, []);
    const parent = useRef(null);
    const [status, setStatus] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setStatus((s) => s + 0.5), 4000 / 580);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <motion.div
                id="threejs"
                className={`fixed top-0 z-40 overflow-hidden`}
                ref={parent}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl font-light text-center max-w-4xl w-4/5 border-4 border-[#B3B3B3] px-8 md:px-16 py-32 rounded-lg flex flex-col items-center justify-center gap-16">
                    <h1>
                        welcome to poolesville
                        <wbr />
                        _hacks
                    </h1>
                    <Progress
                        className="rounded-lg fixed w-2/3 mx-auto !bg-slate-800"
                        height="24px"
                        value={status}
                        min="0"
                        max="100"
                        colorScheme="yellow"
                    />
                </div>
                <canvas id="bg" ref={canvas}></canvas>
            </motion.div>
        </>
    );
};
export default Loading;
