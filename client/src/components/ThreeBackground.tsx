import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function StarField(props: any) {
  const ref = useRef<any>(null);

  const [sphere] = useState(() => {
    // @ts-ignore
    const points = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    for (let i = 0; i < points.length; i++) {
      if (isNaN(points[i])) points[i] = 0;
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#050510']} />
          <StarField />
          <EffectComposer>
            <Bloom luminanceThreshold={0} mipmapBlur intensity={0.5} radius={0.4} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
