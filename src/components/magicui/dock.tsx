"use client";

import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  disableMagnification?: boolean;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      disableMagnification = false,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
    const isHovering = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      isHovering.set(1);
    };

    const handleMouseLeave = () => {
      isHovering.set(0);
      mouseX.set(Infinity);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(dockVariants({ className }))}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<DockIconProps>(child)) {
            return React.cloneElement(child, {
              ...child.props,
              mouseX: mouseX,
              size: iconSize,
              magnification: iconMagnification,
              distance: iconDistance,
              direction: direction,
              disableMagnification: disableMagnification,
            });
          }
          return child;
        })}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
  disableMagnification?: boolean;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  disableMagnification = false,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);
  const effectiveMouseX = mouseX ?? defaultMouseX;

  const distanceCalc = useTransform(effectiveMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const sizeSpring = useSpring(sizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const backgroundSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [0, 1, 0],
  );

  const backgroundSpring = useSpring(backgroundSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: disableMagnification ? size : sizeSpring,
        height: disableMagnification ? size : sizeSpring,
        opacity: disableMagnification ? 1 : backgroundSpring,
      }}
      className={cn(
        "flex aspect-square items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { Dock, DockIcon };
