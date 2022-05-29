import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container } from '@mui/system';
import { Button, Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';

function PlaceShop({ props }) {
  let navigate = useNavigate();
  const location = useLocation();

  const dataPlace = location.state.data

  // console.log('dataPlace', dataPlace);

  const componentStyles = {
    width: '5rem',
    height: '5rem',
  };

  const goPageHome = () => {
    navigate(`/`);
  }

  return (
    <Container>
      <Box sx={{ mt: 10, ml: 6 }}>
        <Stack spacing={2} direction="row">
          <Button className='color-blue' variant="contained" onClick={() => goPageHome()}>Back</Button>
        </Stack>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 3 }}>
          <div x={{ m: 1, width: '25ch' }} variant="outlined">
            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
              <Card sx={{ maxWidth: 630 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={dataPlace.profile_image_url}
                  alt="green iguana"
                />

                <CardContent>
                  <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {dataPlace.name}
                      <Typography variant="body2">
                        {dataPlace.rating}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">
                      Address :
                    </Typography>
                    <Typography variant="body2">
                      {dataPlace.address}
                    </Typography>
                  </Stack>

                  <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="body2">
                      Opening Hour :
                    </Typography>
                    <Typography variant="body2" >
                      {dataPlace.operation_time && dataPlace.operation_time.length > 0 &&
                        dataPlace.operation_time.map((item, i) => {
                          return (
                            <Typography variant="body2">
                              {`${item.day} : ${item.time_open} - ${item.time_close}`}
                            </Typography>
                          )
                        })
                      }
                    </Typography>

                  </Stack>

                </CardContent>
              </Card>
            </Box>
          </div>

          <div sx={{ m: 1, width: '25ch' }} variant="outlined">
            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
              <Card sx={{ maxWidth: 630 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Image
                  </Typography>
                  <ImageList sx={{ ...componentStyles, borderRadius: '16px', width: 300, height: '100%', mt: 0 }} gap={0} cols={1} rowHeight={164}>
                    {dataPlace.images && dataPlace.images.length > 0 &&
                      dataPlace.images.map((img, i) => {
                        return (
                          <ImageListItem key={i}>
                            <img
                              src={img}
                              loading="lazy"
                            />
                          </ImageListItem>
                        )
                      })
                    }
                  </ImageList>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Box>
      </Box>

      <style jsx="true" global="true">{`
            .css-sghohy-MuiButtonBase-root-MuiButton-root {
              background-color: #134B8A
            }
            `}</style>
    </Container >
  );
}

export default PlaceShop