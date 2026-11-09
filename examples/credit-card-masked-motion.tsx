"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  CreditCardBrand,
  CreditCardExpiry,
  CreditCardFooter,
  CreditCardHeader,
  CreditCardHolder,
  CreditCardIssuer,
} from "@/components/ui/credit-card";
import { ArrowClockwiseIcon } from "@/lib/icons";

const FULL = "4242 4242 4242 4242";
const MASKED = "•••• •••• •••• 4242";
const STAGGER = 0.018;
const DURATION = 0.35;
const EASE = [0.45, 0, 0.55, 1] as const;

export function CreditCardMaskedMotion() {
  const [masked, setMasked] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMasked(true), 1300);
    return () => clearTimeout(t);
  }, [cycle]);

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <CreditCard>
        <CreditCardHeader>
          <CreditCardIssuer />
          <CreditCardBrand brand="visa" />
        </CreditCardHeader>
        <span className="inline-flex overflow-hidden font-mono text-sm tracking-[0.1em] tabular-nums sm:text-lg sm:tracking-[0.15em]">
          {FULL.split("").map((fullChar, i) => {
            const maskedChar = MASKED[i] ?? fullChar;
            const isSpace = fullChar === " ";
            const delay = i * STAGGER;
            return (
              <span
                className="relative inline-flex h-[1.2em] w-[1ch] items-center justify-center"
                key={i}
              >
                <motion.span
                  animate={{
                    filter: masked ? "blur(6px)" : "blur(0px)",
                    opacity: masked ? 0 : 1,
                    scale: masked ? 0.15 : 1,
                  }}
                  className="absolute inset-0 flex items-center justify-center will-change-transform"
                  initial={{ filter: "blur(6px)", opacity: 0, scale: 0.15 }}
                  transition={{ delay, duration: DURATION, ease: EASE }}
                >
                  {isSpace ? "\u00A0" : fullChar}
                </motion.span>
                <motion.span
                  animate={{
                    filter: masked ? "blur(0px)" : "blur(6px)",
                    opacity: masked ? 1 : 0,
                    scale: masked ? 1 : 0.15,
                  }}
                  className="absolute inset-0 flex items-center justify-center will-change-transform"
                  initial={{ filter: "blur(6px)", opacity: 0, scale: 0.15 }}
                  transition={{ delay, duration: DURATION, ease: EASE }}
                >
                  {isSpace ? "\u00A0" : maskedChar}
                </motion.span>
              </span>
            );
          })}
        </span>
        <CreditCardFooter>
          <CreditCardHolder value="John Doe" />
          <CreditCardExpiry value="1228" />
        </CreditCardFooter>
      </CreditCard>
      <Button
        onClick={() => {
          setMasked(false);
          setCycle((c) => c + 1);
        }}
        size="sm"
        variant="outline"
      >
        <ArrowClockwiseIcon />
        Replay
      </Button>
    </div>
  );
}
