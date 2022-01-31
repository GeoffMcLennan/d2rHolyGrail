import { TableCell, TableRow } from "@mui/material";

export type Stats = {
  exists: number,
  owned: number,
  remaining: number,
  percent: number,
}

type StatisticsLineProps = {
  title: string,
  stats: Stats,
  bold?: boolean,
}

export function StatisticsLine({ title, stats, bold }: StatisticsLineProps) {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      style={ bold ? { background: '#222', fontWeight: 'bold' } : {}}
    >
      <TableCell>{title}</TableCell>
      <TableCell>{stats.exists}</TableCell>
      <TableCell>{stats.owned}</TableCell>
      <TableCell>{stats.remaining}</TableCell>
      <TableCell>{stats.percent} %</TableCell>
    </TableRow>
  );
}