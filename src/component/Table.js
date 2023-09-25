import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box,
} from "@mui/material";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";


const Table = ({ data, columns }) => {

    const { getHeaderGroups, getRowModel } = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Box >
            <MuiTable sx={{ borderRadius: "20px" }}>
                <TableHead sx={{ backgroundColor: '#F4F6F8', border: '2px solid #E0E0E0' }} >
                    {getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} sx={{ color: '#F4F6F8' }}>
                            {headerGroup.headers.map((header) => (
                                <TableCell key={header.id}
                                    sx={{ border: '2px solid #E0E0E0' }}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody sx={{ backgroundColor: "#FFFFFF" }}>
                    {getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} sx={{ border: '2px solid #E0E0E0' }}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </Box>
    );
};

export default Table;