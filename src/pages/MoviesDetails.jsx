import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(sno, name, director, year, rating, votes, budget, released) {
  return { sno,name, director, year, rating, votes, budget, released };
}

export default function MoviesDetails({ movies }) {
  const movieRows = movies.map((movie, idx) =>
    createData(
      idx+1,
      movie.name,
      movie.director,
      movie.year,
      movie.rating,
      movie.votes,
      movie.budget,
      movie.released
    )
  );
  return (
    <TableContainer component={Paper} style={{border: '1px solid black'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">S No.</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Director</TableCell>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Rating</TableCell>
            <TableCell align="left">Votes</TableCell>
            <TableCell align="left">Budget</TableCell>
            <TableCell align="left">Released</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sno}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.director}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell align="left">{row.rating}</TableCell>
              <TableCell align="left">{row.votes}</TableCell>
              <TableCell align="left">{row.budget}</TableCell>
              <TableCell align="left">{row.released}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
