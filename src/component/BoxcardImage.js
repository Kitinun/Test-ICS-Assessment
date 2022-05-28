import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function BoxcardImage(props) {
    let navigate = useNavigate(); 

    const componentStyles = {
        width: '5rem',
        height: '5rem',
    };

    const goToDetail = (data) => {
        let path = `/detail`; 
        navigate(path);
    }

    return (
        <Card sx={{ maxWidth: 300, ml: 6, mt: 6 }} onClick={() => goToDetail(props)}>
            <CardActionArea sx={{ position: 'relative' }}>
                <CardHeader
                    avatar={
                        <Avatar variant='rounded' aria-label="recipe" sx={{ width: 60, height: 60 }}
                            src={props.item.profile_image_url}></Avatar>
                    }
                    title={props.item?.name}
                    subheader={
                        <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ display: 'flex', alignItems: 'flex-start'}} >
                                <CalendarTodayIcon sx={{ width: 20, height: 20 }} />
                                <Typography sx={{ ml: 1 }}>{`${props.item.operation_time[0].time_open} - ${props.item.operation_time[0].time_close}`}</Typography>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                {props.item.rating}
                                <StarIcon sx={{ width: 20, height: 20 }} />
                            </Typography>
                        </Stack>
                    }
                />
                <CardContent>
                    <ImageList sx={{ ...componentStyles, borderRadius: '16px', width: 270, height: '100%', mt: 0 }} gap={0} cols={3} rowHeight={164}>
                        {props.item.images && props.item.images.length > 0 &&
                            props.item.images.map((img, i) => {
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
            </CardActionArea>

            <style jsx="true" global="true">{`
            .css-et1ao3-MuiTypography-root {
                font-family: 'Kanit' ;
                font-style: normal ;
                font-weight: 500 ;
                font-size: 18px ;
            }
            `}</style>
        </Card>
    )
}

export default BoxcardImage