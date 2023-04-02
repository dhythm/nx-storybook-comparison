import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StorybookWebpackProps {}

const StyledStorybookWebpack = styled.div`
  color: pink;
`;

export function StorybookWebpack(props: StorybookWebpackProps) {
  return (
    <StyledStorybookWebpack>
      <h1>Welcome to StorybookWebpack!</h1>
    </StyledStorybookWebpack>
  );
}

export default StorybookWebpack;
