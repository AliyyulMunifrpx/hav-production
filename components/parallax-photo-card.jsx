"use client";

import { useTransform, motion } from "framer-motion";
import Image from "next/image";

export function ParallaxPhotoCard({
  photoSrc,
  index,
  man,
  woman,
  meta,
  frameHeight = 480,
  photoExtraWidth,
}) {
  const { x, step, itemWidth, containerWidth } = meta;

  const currentWidth = itemWidth || 320;

  // Supaya selalu 3/4 dari lebar card (currentWidth * 0.75)
  const extraWidth =
    photoExtraWidth !== undefined ? photoExtraWidth : currentWidth * 0;

  const scale = (currentWidth + extraWidth) / currentWidth;
  const scaledWidth = currentWidth * scale;
  const scaledHeight = frameHeight * scale;
  const verticalOffset = (frameHeight - scaledHeight) / 2;

  const photoX = useTransform(x, (latestX) => {
    if (!containerWidth || !step) return 0;

    const cardLeft = index * step + latestX;
    const cardCenter = cardLeft + currentWidth / 2;
    const progress = Math.min(Math.max(cardCenter / containerWidth, 0), 1);

    return (0.5 - progress) * extraWidth;
  });

  return (
    <div
      className="relative group overflow-hidden border border-primary/10 hover:border-second/40 transition-colors duration-500"
      style={{ width: "100%", height: frameHeight }}
    >
      {/* FOTO PARALLAX */}
      <motion.div
        className="absolute top-0 pointer-events-none z-0"
        style={{
          width: scaledWidth,
          height: scaledHeight,
          top: verticalOffset,
          left: (currentWidth - scaledWidth) / 2,
          x: photoX,
        }}
      >
        <Image
          src={photoSrc}
          alt={man && woman ? `${man} & ${woman}` : "Gallery photo"}
          fill
          draggable={false}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      {/* GRADIENT OVERLAY & TEXT EDITORIAL */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/70 to-transparent z-10 p-8 flex flex-col justify-end items-center gap-2">
        {man && woman && (
          <>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-second">
              The Wedding of{" "}
            </span>
            <p className="font-serif text-2xl lg:text-3xl text-second text-center font-normal tracking-wide">
              {man} <span className="italic text-second font-serif">&</span>{" "}
              {woman}
            </p>
          </>
        )}
      </div>

      {/* SUBTLE INNER BORDER */}
      <div className="absolute inset-0 pointer-events-none z-20 border border-second/5" />
    </div>
  );
}
