import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { BoxProps, Box } from "@chakra-ui/react";
import { motion, Transition } from "framer-motion";
interface FadeInSectionProps extends BoxProps {
  children: ReactNode;
}
const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transition: Transition = { duration: 0.6, ease: "easeOut" };

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={transition}
    >
      {children}
    </MotionBox>
  );
};

export default FadeInSection;
