import { Parser } from 'json2csv';
import { FC, useCallback } from 'react';

type CSV2JsonField = {
  label: string;
  value: string;
};

type Props = {
  fileName: string | (() => string);
  fields: CSV2JsonField[];
  rows: any[];
};

export const CsvExport: FC<Props> = ({ fileName, fields, rows }) => {
  const onClick = useCallback(async () => {
    const json2csvParser = new Parser({
      fields,
      header: true,
      withBOM: true,
      quote: '',
    });
    const parsedCsv = json2csvParser.parse(rows);
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, parsedCsv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const _fileName = typeof fileName === 'function' ? fileName() : fileName;
    a.download = `${_fileName}.csv`;
    a.click();
    a.remove();
  }, [fileName, fields, rows]);

  return <button onClick={onClick}>Export</button>;
};
