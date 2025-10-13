import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTheme } from '../contexts/ThemeContext';

export const NordicLightCycle = () => {
  const scrollProgress = useScrollProgress();
  const { theme } = useTheme();

  const getBackgroundColor = () => {
    if (theme === 'dark') {
      if (scrollProgress < 20) {
        return 'rgb(26, 26, 26)';
      } else if (scrollProgress < 40) {
        const t = (scrollProgress - 20) / 20;
        return `rgb(${26 + t * 6}, ${26 + t * 4}, ${26 + t * 4})`;
      } else if (scrollProgress < 60) {
        const t = (scrollProgress - 40) / 20;
        return `rgb(${32 + t * 4}, ${30 + t * 5}, ${30 + t * 8})`;
      } else if (scrollProgress < 80) {
        const t = (scrollProgress - 60) / 20;
        return `rgb(${36 + t * 3}, ${35 + t * 5}, ${38 + t * 7})`;
      } else {
        const t = (scrollProgress - 80) / 20;
        return `rgb(${39 + t * 2}, ${40 + t * 4}, ${45 + t * 5})`;
      }
    }

    if (scrollProgress < 20) {
      return 'rgb(250, 248, 244)';
    } else if (scrollProgress < 40) {
      const t = (scrollProgress - 20) / 20;
      return `rgb(${250 - t * 10}, ${248 - t * 10}, ${244 - t * 5})`;
    } else if (scrollProgress < 60) {
      const t = (scrollProgress - 40) / 20;
      return `rgb(${240 - t * 8}, ${238 - t * 15}, ${239 - t * 30})`;
    } else if (scrollProgress < 80) {
      const t = (scrollProgress - 60) / 20;
      return `rgb(${232 + t * 13}, ${223 + t * 7}, ${209 + t * 3})`;
    } else {
      const t = (scrollProgress - 80) / 20;
      return `rgb(${245 + t * 5}, ${230 + t * 18}, ${212 + t * 32})`;
    }
  };

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-1000 ease-out"
      style={{
        backgroundColor: getBackgroundColor(),
      }}
    />
  );
};
