import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Flex,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchWrapper,
} from './ChangeTheme.styles';

export const ChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SwitchWrapper>
        <form>
          <Flex>
            <SwitchLabel htmlFor="change-theme-mode">
              Change Theme mode
            </SwitchLabel>
            <SwitchRoot
              id="change-theme-mode"
              onCheckedChange={() => toggleTheme()}
            >
              <SwitchThumb />
            </SwitchRoot>
          </Flex>
        </form>
      </SwitchWrapper>
    </>
  );
};
