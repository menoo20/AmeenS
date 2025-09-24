import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const CERTIFICATE_IMAGES = [
  '/assets/certificates/programming/1.png',
  '/assets/certificates/programming/2.png',
  '/assets/certificates/programming/3.png',
  '/assets/certificates/programming/4.png',
  '/assets/certificates/programming/5.png',
  '/assets/certificates/programming/6.png',
  '/assets/certificates/programming/CS50x.png',
];

const CertificateVault3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Cylinder geometry
    const radius = 3;
    const panelCount = CERTIFICATE_IMAGES.length;
    const panels: THREE.Mesh[] = [];
    const loader = new THREE.TextureLoader();

    CERTIFICATE_IMAGES.forEach((img, i) => {
      const texture = loader.load(img);
      const geometry = new THREE.PlaneGeometry(2, 1.2);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      const angle = (i / panelCount) * Math.PI * 2;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = Math.sin(angle) * radius;
      mesh.position.z = 0;
      mesh.lookAt(0, 0, 0);
      scene.add(mesh);
      panels.push(mesh);
    });

    // Animation
    let rotation = 0;
    function animate() {
      rotation += 0.005;
      panels.forEach((panel, i) => {
        const angle = (i / panelCount) * Math.PI * 2 + rotation;
        panel.position.x = Math.cos(angle) * radius;
        panel.position.y = Math.sin(angle) * radius;
        panel.lookAt(0, 0, 0);
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default CertificateVault3D;
