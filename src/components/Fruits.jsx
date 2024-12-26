import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const data = [
  {
    src: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fpromotions%2Ff9da7ddafc21.png&w=750&q=75',

  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',

  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',

  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',

  },
];

export default function Fruits() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        // py: 1,
        mx: 'auto',
        height: 300,
        width: '100%',
        maxWidth: 1200, // Optional: Limit the max width if needed
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        alignItems: 'center', // Center items vertically
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="horizontal"
          size="lg"
          key={item.title}
          variant="outlined"
          sx={{
            minWidth: 300, // Increase card width
            maxWidth: 400, // Optional: Limit the max width of each card
          }}
        >
          <AspectRatio ratio="16/9" sx={{ minWidth: 200 }}>
            <img
              srcSet={`${item.src}?h=600&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=600&fit=crop&auto=format`}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure image covers the aspect ratio
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1, p: 2 }}>
            <Typography level="title-md" sx={{ mb: 1 }}>{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
