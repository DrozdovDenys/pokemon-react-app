import React from "react";
import {
    TablePagination,
  } from "@mui/material";
const Pagination = (props) => {

    return (
        <TablePagination
        component="div"
        count={props.pokemonCount}
        page={props.page}
        onPageChange={props.handleChangePage}
        rowsPerPage={props.rowsPerPage}
        rowsPerPageOptions={props.rowsPerPageOptions}
        onRowsPerPageChange={props.handleChangeRowsPerPage}
        showFirstButton
        showLastButton
        labelRowsPerPage="Cards per page:"
      />
    )
}

export default Pagination;