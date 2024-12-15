import React, { useState } from 'react';
import { Grid, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const galleryMedia = [
  { type: 'image', src: '/assets/Invite.png' }, // Replace with actual image paths
  { type: 'image', src: '/assets/Invite1.png' },
  { type: 'video', src: '/assets/InviteVideo.mp4' }, // Replace with actual video paths
  { type: 'image', src: '/assets/Invite2.png' },
  { type: 'image', src: '/assets/Invite3.png' },
  { type: 'image', src: '/assets/Invite4.png' },
  { type: 'image', src: '/assets/Invite5.png' },
  { type: 'image', src: '/assets/Invite6.png' },
  { type: 'video', src: '/assets/InviteVideo1.mp4' },
];
// const galleryImages = [
//   '/assets/Invite.png',  // Replace with actual image paths
//   '/assets/Invite1.png',
//   '/assets/Invite2.png',
//   '/assets/Invite3.png',
//   '/assets/Invite4.png',
//   '/assets/Invite5.png',
//   '/assets/Invite6.png',
//   // '/assets/InviteVideo.mp4',
// ];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleOpen = (media) => {
    setSelectedMedia(media);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" style={{ padding: '50px 0'}} >
      <h2>Photo Gallery</h2>
      <Grid container spacing={2}>
        {galleryMedia.map((media, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {media.type === 'image' ? (
              <img
                src={media?.src}
                alt={`Gallery Media ${index + 1}`}
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleOpen(media)}
              />
            ) : (
              <video
                src={media?.src}
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleOpen(media)}
                controls={false} // Show only video thumbnail by default
              />
            )}
          </Grid>
        ))}
      </Grid>

      {/* Modal for Image/Video Viewing */}
      <Modal open={open} onClose={handleClose} aria-labelledby="media-modal">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedMedia && selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.src}
              alt="Selected"
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <video
              src={selectedMedia?.src}
              style={{ width: '100%', height: 'auto' }}
              controls
              autoPlay
            />
          )}
        </Box>
      </Modal>
    </section>
  );
};

export default Gallery;
