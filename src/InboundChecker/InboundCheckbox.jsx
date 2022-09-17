import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'All', width: 200 },
  
];

const rows = [
  
  { id: "TradeRef No"},
  { id: "Email" },
  { id: "UID" },
  { id: "Trade Date"},
  { id: "Settlement Type"},
  { id: "Settlement Date" },
  { id: "XR" },
  { id: "UTR No"},
  { id: "Base Currency Amount"},
  { id: "Quote Currency Amount"},
  { id: "Esign"},
];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: '20%' }}>
      <DataGrid
        rows={rows }
         columns={columns}
        pageSize={13}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
