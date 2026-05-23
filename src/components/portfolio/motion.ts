import { Transition, Variants } from "framer-motion";

export const editorialEase = [0.22, 1, 0.36, 1] as const;
export const viewportOnce = { once: true, amount: 0.2 };

export function revealTransition(delay = 0, duration = 0.72): Transition {
  return {
    delay,
    duration,
    ease: editorialEase,
  };
}

export function fadeUp(delay = 0, distance = 26): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: revealTransition(delay),
    },
  };
}

export function softenIn(delay = 0, scale = 0.96): Variants {
  return {
    hidden: {
      opacity: 0,
      scale,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: revealTransition(delay, 0.68),
    },
  };
}

export function staggerGroup(
  delayChildren = 0.06,
  staggerChildren = 0.08,
): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

export const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.54,
      ease: editorialEase,
    },
  },
};

export const lineReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const gentleHover = {
  y: -6,
  transition: {
    duration: 0.22,
    ease: editorialEase,
  },
};

export const gentleTap = {
  scale: 0.985,
  transition: {
    duration: 0.16,
    ease: editorialEase,
  },
};
