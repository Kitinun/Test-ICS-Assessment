import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, Stack, Container, TablePagination } from '@mui/material';
import InputSelect from '../component/InputSelect';
import InputSearch from '../component/InputSearch';
import BoxcardImage from '../component/BoxcardImage';
import DataRes from '../Json/example_data.json';

function Home() {
    const [countryList, setCountryLis] = useState([
        { value: "1", label: "Restaurant" },
        { value: "2", label: "Bakery" },
        { value: "3", label: "Cafe" }
    ]);
    const [countrySelectValue, setCountrySelectValue] = useState('');

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 9));
        setPage(9);
    };

    return (
        <div>
            <Container>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid spacing={2}>
                        <Grid item xs={12} sm={4} md={5} lg={7} xl={9}>
                            <Box className='text-title' sx={{ display: { xs: 'none', md: 'flex' }, mt: 5, ml: 5 }}>
                                <h5>Place List</h5>
                            </Box>
                            <Box className="text-title" sx={{ display: { xs: 'flex', md: 'none' }, mt: 5, ml: 5 }}>
                                <h5>Place List</h5>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 3 }}>
                        <div sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputSelect
                                selectValue={countrySelectValue} dataList={countryList}
                                handleChange={(event) => {
                                    setCountrySelectValue(event.target.value);
                                }}
                            />
                        </div>
                        <div sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputSearch />
                        </div>
                    </Box>

                    <Grid container spacing={3}>
                        {DataRes && DataRes.length > 0 ?
                            DataRes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => {
                                return <BoxcardImage key={i} item={item} index={i} />
                            })
                            : 'ไม่พบข้อมูล'
                        }
                    </Grid>

                    <Box sx={{ mt: 3 }}>
                        <Stack spacing={2}>
                            <TablePagination variant="outlined"
                                rowsPerPageOptions={[9]}
                                component="div"
                                count={DataRes.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Home