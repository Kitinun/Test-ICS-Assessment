import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container } from '@mui/system';
import { Button, Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function PlaceShop({ props }) {
  let navigate = useNavigate();
  const location = useLocation();

  const dataPlace = location.state.data

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

      <Card sx={{ background: '#C4D3E9', maxWidth: '100%', mt: 2}} >
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
                        <span className='text-detail-title'>{dataPlace.name}</span>
                      </Typography>
                      <Typography variant="body2">
                        <img className='icon-rating' src="/svg/point.svg" />
                        <span className='text-detail-title'>{dataPlace.rating}</span>
                      </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-start' }}>
                      <Typography variant="body2">
                        <span className='text-detail'>Address :</span>
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 2 }}>
                        <span className='text-subdetail'>{dataPlace.address}</span>
                      </Typography>
                    </Stack>

                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-start', mt: 2 }}>
                      <Typography variant="body2">
                        <span className='text-detail'>Opening Hour :</span>
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 2 }}>
                        {dataPlace.operation_time && dataPlace.operation_time.length > 0 &&
                          dataPlace.operation_time.map((item) => {
                            return (
                              <Typography variant="body2">
                                <span className='text-subdetail'>{`${item.day} : ${item.time_open} - ${item.time_close}`}</span>
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
                    <ImageList sx={{ ...componentStyles, borderRadius: '16px', width: 480, height: 1000, mt: 0 }} gap={0} cols={1} rowHeight={164}>
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
      </Card>

      <style jsx="true" global="true">{`
            .css-sghohy-MuiButtonBase-root-MuiButton-root {
              background-color: #134B8A
            }
            `}</style>
    </Container >
  );
}

export default PlaceShop