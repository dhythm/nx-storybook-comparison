import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StorybookViteProps {}

const StyledStorybookVite = styled.div`
  color: pink;
`;

export function StorybookVite(props: StorybookViteProps) {
  return (
    <StyledStorybookVite>
      <h1>Welcome to StorybookVite!</h1>
    </StyledStorybookVite>
  );
}

export default StorybookVite;
