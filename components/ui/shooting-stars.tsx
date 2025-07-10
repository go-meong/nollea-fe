"use client";
import { cn } from "@/app/_lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxStars?: number;
}

// 왼쪽에서 오른쪽으로 대각선으로만 떨어지도록 수정
const getRandomStartPoint = () => {
  const x = Math.random() * window.innerWidth;
  const y = -20; // 화면 위쪽에서 시작

  // 왼쪽에서 오른쪽으로 대각선 방향 (30도~60도)
  const angle = 30 + Math.random() * 30;

  return { x, y, angle };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 1,
  maxSpeed = 3,
  minDelay = 300, // 더 자주 별이 생성되도록 딜레이 감소
  maxDelay = 500,
  starColor = "#dedede",
  trailColor = "#0b0b0b",
  starWidth = 12,
  starHeight = 2,
  className,
  maxStars = 3, // 동시에 표시될 수 있는 최대 별 개수
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      setStars((prevStars) => {
        // 최대 별 개수 제한
        if (prevStars.length >= maxStars) {
          return prevStars;
        }

        const { x, y, angle } = getRandomStartPoint();
        const newStar: ShootingStar = {
          id: Date.now() + Math.random(), // 고유 ID 보장
          x,
          y,
          angle,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };

        return [...prevStars, newStar];
      });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    const moveStar = () => {
      setStars((prevStars) => {
        return prevStars
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter((star) => {
            // 화면을 벗어난 별들 제거
            return !(
              star.x < -20 ||
              star.x > window.innerWidth + 20 ||
              star.y < -20 ||
              star.y > window.innerHeight + 20
            );
          });
      });
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
