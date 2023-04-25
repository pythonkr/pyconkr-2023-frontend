import { useTheme } from 'next-themes';
import { styled, css } from '@stitches/react';
import { LightModeIcon, DarkModeIcon } from '@/public/icons';
import { useEffect, useState } from 'react';

const style = css({
  width: 36,
  height: 36,
  cursor: 'pointer',
  '& path': {
    fill: '$textPrimary',
  },

  variants: {
    isMobile: {
      true: {
        width: 24,
        height: 24,
      },
    },
  },
});

const LightMode = styled(LightModeIcon, style);
const DarkMode = styled(DarkModeIcon, style);

interface ThemeSwitchProps {
  isMobile?: boolean;
}

const ThemeSwitch = ({ isMobile }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';
  const Icon = isDark ? DarkMode : LightMode;
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  return (
    <Icon
      role={'button'}
      aria-pressed={isDark}
      onClick={toggleTheme}
      isMobile={isMobile}
    />
  );
};
export default ThemeSwitch;
