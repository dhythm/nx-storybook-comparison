import styled from '@emotion/styled';
import { CsvExport } from './CsvExport';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="admin" />
      <CsvExport
        fileName="sample"
        fields={[{ label: 'label', value: 'value' }]}
        rows={[]}
      />
    </StyledApp>
  );
}

export default App;
