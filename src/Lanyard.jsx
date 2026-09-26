/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import cardGLB from './assets/lanyard/card.glb';
import lanyard from './assets/lanyard/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel — lets useTexture be called unconditionally when a
// front/back image isn't supplied.
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// The card model's front face is UV-mapped to the LEFT half of the texture
// atlas and the back face to the RIGHT half (measured from card.glb).
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: isMobile ? 25 : fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}
function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const _defaultTex = useTexture(lanyardImage || lanyard);
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, 1024, 128);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 64px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Fallback for letterSpacing just in case, but usually space characters work best for wide spacing
    ctx.fillText('S  A  H  A  N', 512, 68);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 16;
    return tex;
  }, []);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const fetchAndUpdateVisits = async () => {
      try {
        const BIN_ID = '6ab8039effd5d16053322a27';
        const MASTER_KEY = '$2a$10$mlqUY7ZZfsK79yFhi6QRqOv5a3bFNyOSZwhVzk2LbbMLGcZQghorC';
        
        // Fetch current count
        const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          headers: {
            'X-Master-Key': MASTER_KEY
          }
        });
        
        if (!getRes.ok) throw new Error('Network response was not ok');
        const getData = await getRes.json();
        
        const currentCount = getData.record?.visits || 1420;
        const newCount = currentCount + 1;
        
        // Update UI immediately
        setVisits(newCount);
        
        // Save back to JSONBin
        await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': MASTER_KEY
          },
          body: JSON.stringify({ visits: newCount })
        });
      } catch (err) {
        console.error('Failed to fetch/update visit count:', err);
      }
    };
    
    fetchAndUpdateVisits();
  }, []);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img, rect) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      
      // Base off-white background
      ctx.fillStyle = '#eaeaea';
      ctx.fillRect(rx, ry, rw, rh);
      
      const margin = rw * 0.08; // Increased side padding
      const topMargin = rh * 0.05; // Increased top padding
      
      // 1. Draw Profile Photo as a rounded rect at the top
      const photoWidth = rw - margin * 2;
      const photoHeight = rh * 0.55; 
      
      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(rx + margin, ry + topMargin, photoWidth, photoHeight, 30);
      } else {
        ctx.rect(rx + margin, ry + topMargin, photoWidth, photoHeight);
      }
      ctx.clip();
      
      // fill dark gray placeholder just in case
      ctx.fillStyle = '#333333';
      ctx.fillRect(rx + margin, ry + topMargin, photoWidth, photoHeight);
      
      // Draw actual image (cover fit)
      const scale = Math.max(photoWidth / img.width, photoHeight / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = (rx + margin) + (photoWidth - dw) / 2;
      const dy = (ry + topMargin) + (photoHeight - dh) / 2;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
      
      // 2. Draw "SOFTWARE DEVELOPER" text
      let cursorY = ry + topMargin + photoHeight + rh * 0.06;
      ctx.fillStyle = '#888888';
      ctx.font = `500 ${rw * 0.045}px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'center';
      ctx.fillText('SOFTWARE DEVELOPER', rx + rw/2, cursorY);
      
      // 3. Draw "SAHAN" text
      cursorY += rh * 0.09;
      ctx.fillStyle = '#111111';
      ctx.font = `900 ${rw * 0.13}px 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('SAHAN', rx + rw/2, cursorY);
      
      // 4. Draw dotted separator line
      cursorY += rh * 0.04;
      ctx.strokeStyle = '#cccccc';
      ctx.lineWidth = Math.max(2, rw * 0.005);
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(rx + margin, cursorY);
      ctx.lineTo(rx + rw - margin, cursorY);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // 5. Draw ID and STATUS columns
      cursorY += rh * 0.045;
      const leftColX = rx + margin;
      const rightColX = rx + rw - margin;
      
      ctx.textAlign = 'left';
      ctx.fillStyle = '#888888';
      ctx.font = `500 ${rw * 0.045}px 'JetBrains Mono', monospace`;
      ctx.fillText('ID', leftColX, cursorY);
      
      ctx.textAlign = 'right';
      ctx.fillText('STATUS', rightColX, cursorY);
      
      cursorY += rh * 0.04;
      ctx.fillStyle = '#111111';
      ctx.font = `700 ${rw * 0.055}px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'left';
      ctx.fillText('DEV-2026', leftColX, cursorY);
      
      ctx.textAlign = 'right';
      ctx.fillText('OPEN TO WORK', rightColX, cursorY);
      
      // 6. Draw Barcode
      cursorY += rh * 0.025;
      const barcodeHeight = rh * 0.09;
      ctx.fillStyle = '#111111';
      
      // Draw VISITS on the side
      if (visits > 0) {
        ctx.save();
        ctx.translate(rx + rw - rw * 0.03, ry + rh * 0.7);
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = '#65d070';
        ctx.font = `800 ${rw * 0.045}px 'JetBrains Mono', monospace`;
        ctx.textAlign = 'center';
        const vStr = visits.toString().padStart(5, '0');
        ctx.fillText(`VISITOR NO: #${vStr}`, 0, 0);
        ctx.restore();
      }
      
      // Deterministic pseudo-random barcode
      let bcX = leftColX;
      let seed = 12345;
      const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };
      
      while (bcX < rightColX - (rw * 0.02)) {
         const barW = random() * rw * 0.015 + rw * 0.003;
         const gapW = random() * rw * 0.01 + rw * 0.005;
         if (bcX + barW > rightColX) break;
         ctx.fillRect(bcX, cursorY, barW, barcodeHeight);
         bcX += barW + gapW;
      }
    };

    if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
    if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map, visits]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);


  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 3.0, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    } else if (card.current) {
      // Apply a gentle breeze effect to keep the card feeling alive
      const t = state.clock.getElapsedTime();
      card.current.wakeUp(); // Prevent it from falling asleep
      
      // Tiny directional forces (sway)
      card.current.applyImpulse({ 
        x: Math.sin(t * 0.7) * 0.006, 
        y: Math.cos(t * 0.5) * 0.004, 
        z: Math.sin(t * 0.9) * 0.006 
      }, true);
      
      // Tiny rotational forces (twirl/tilt)
      card.current.applyTorqueImpulse({
        x: Math.sin(t * 0.3) * 0.0001,
        y: Math.cos(t * 0.4) * 0.0002,
        z: Math.sin(t * 0.5) * 0.0001
      }, true);
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        const lerpAlpha = Math.min(1, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
        ref.current.lerped.lerp(
          ref.current.translation(),
          lerpAlpha
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[1.6, 2.25, 0.01]} />
          <group
            scale={4.5}
            position={[0, -2.4, -0.1]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
