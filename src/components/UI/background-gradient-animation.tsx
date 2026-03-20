"use client";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(7, 28, 46)",
  gradientBackgroundEnd = "rgb(15, 20, 30)",
  firstColor = "255, 145, 77",
  secondColor = "230, 110, 40",
  thirdColor = "255, 180, 120",
  fourthColor = "255, 120, 50",
  fifthColor = "255, 155, 90",
  pointerColor = "255, 145, 77",
  size = "100vw",
  blendingValue = "hard-light" as const,
  children,
  className,
  interactive = false,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Shared style for each gradient orb
  const orbBaseStyle: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
  };

  return (
    <div
      className={containerClassName}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
    >
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={className}>{children}</div>
      <div
        style={{
          height: "100%",
          width: "100%",
          filter: isSafari ? "blur(24px)" : "url(#blurMe) blur(40px)",
        }}
      >
        {/* Orb 1 */}
        <div
          className="animate-first"
          style={{
            ...orbBaseStyle,
            top: "15%",
            left: "-10vw",
            background: `radial-gradient(circle at center, rgba(${firstColor}, 0.5) 0, rgba(${firstColor}, 0) 50%) no-repeat`,
            transformOrigin: "center center",
            opacity: 0.6,
          }}
        />
        {/* Orb 2 */}
        <div
          className="animate-second"
          style={{
            ...orbBaseStyle,
            top: "28%",
            right: "-20vw",
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.4) 0, rgba(${secondColor}, 0) 50%) no-repeat`,
            transformOrigin: "left center",
            opacity: 0.5,
          }}
        />
        {/* Orb 3 */}
        <div
          className="animate-third"
          style={{
            ...orbBaseStyle,
            top: "42%",
            left: "-15vw",
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.6) 0, rgba(${thirdColor}, 0) 50%) no-repeat`,
            transformOrigin: "right center",
            opacity: 0.7,
          }}
        />
        {/* Orb 4 */}
        <div
          className="animate-fourth"
          style={{
            ...orbBaseStyle,
            top: "55%",
            right: "-30vw",
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.35) 0, rgba(${fourthColor}, 0) 50%) no-repeat`,
            transformOrigin: "center left",
            opacity: 0.4,
          }}
        />
        {/* Orb 5 */}
        <div
          className="animate-fifth"
          style={{
            ...orbBaseStyle,
            top: "70%",
            left: "-20vw",
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.5) 0, rgba(${fifthColor}, 0) 50%) no-repeat`,
            transformOrigin: "center right",
            opacity: 0.6,
          }}
        />
        {/* Orb 6 (New) */}
        <div
          className="animate-second"
          style={{
            ...orbBaseStyle,
            top: "85%",
            right: "0vw",
            background: `radial-gradient(circle at center, rgba(${firstColor}, 0.45) 0, rgba(${firstColor}, 0) 50%) no-repeat`,
            transformOrigin: "center center",
            opacity: 0.55,
          }}
        />
        {/* Orb 7 (New) */}
        <div
          className="animate-fourth"
          style={{
            ...orbBaseStyle,
            top: "95%",
            left: "10vw",
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.55) 0, rgba(${secondColor}, 0) 50%) no-repeat`,
            transformOrigin: "top right",
            opacity: 0.65,
          }}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0, rgba(${pointerColor}, 0) 50%) no-repeat`,
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
              opacity: 0.7,
            }}
          />
        )}
      </div>
    </div>
  );
};
