export type EffectVariant = 'scale' | 'shadow' | 'glow' | 'pulse' | 'border-slide';

const EFFECT_CLASS_MAP: Record<EffectVariant, string> = {
  scale: 'effect-scale',
  shadow: 'effect-shadow',
  glow: 'effect-glow',
  pulse: 'effect-pulse',
  'border-slide': 'effect-border-slide',
};

export const getEffectClasses = (variant: EffectVariant = 'scale') =>
  EFFECT_CLASS_MAP[variant] ?? EFFECT_CLASS_MAP.scale;

export const composeEffects = (...variants: EffectVariant[]) =>
  variants
    .filter(Boolean)
    .map((variant) => getEffectClasses(variant))
    .filter((value, index, array) => array.indexOf(value) === index)
    .join(' ');
