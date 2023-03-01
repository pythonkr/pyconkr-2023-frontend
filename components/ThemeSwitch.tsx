import { useTheme } from 'next-themes';
import { styled, type CSS } from '@stitches/react';
import { LightModeIcon, DarkModeIcon } from '@/public/icons';
import { useEffect, useState } from 'react';

const style: CSS = {
  width: 36,
  height: 36,
  cursor: 'pointer',
  '& path': {
    fill: '$textPrimary',
  },
};

const LightMode = styled(LightModeIcon, style);
const DarkMode = styled(DarkModeIcon, style);

const ThemeSwitch = () => {
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
  return <Icon role={'button'} aria-pressed={isDark} onClick={toggleTheme} />;
};
export default ThemeSwitch;
