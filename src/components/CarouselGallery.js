import React, { useState } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';


const galleryMedia = [
  { type: 'image', src: '/assets/Invite5.png' },
  { type: 'video', src: '/assets/InviteVideo.mp4' }, // Replace with actual video paths
  { type: 'image', src: '/assets/Invite.png' }, // Replace with actual image paths
  { type: 'image', src: '/assets/Invite2.png' },
  { type: 'image', src: '/assets/Invite1.png' },
  { type: 'image', src: '/assets/Invite3.png' },
  { type: 'image', src: '/assets/Invite6.png' },
  { type: 'video', src: '/assets/InviteVideo2.mp4' },
  { type: 'image', src: '/assets/Invite4.png' },
  { type: 'video', src: '/assets/InviteVideo1.mp4' },
  { type: 'video', src: '/assets/InviteVideo3.mp4' },
  { type: 'video', src: '/assets/InviteVideo4.mp4' },
];

const itemsPerPage = 3;  // Number of items to display at once

const CarouselGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  // Starting index of visible items
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

  // Function to move to the next set of items
  const nextItems = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < galleryMedia.length ? prevIndex + itemsPerPage : 0
    );
  };

  // Function to move to the previous set of items
  const prevItems = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : galleryMedia.length - itemsPerPage
    );
  };

  // Get the current visible media items
  const visibleItems = galleryMedia.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="CarouselGallery" style={{ padding: '50px 0'}} >
      <h2>Our Gallery and Memories</h2>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Previous Arrow */}
        <IconButton onClick={prevItems} sx={{ marginRight: 2 }}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Media items in horizontal scrollable layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflowX: 'hidden', // Hide overflow for smooth scrolling
            width: '80%',        // Width of the visible media area
          }}
        >
          {visibleItems.map((media, index) => (
            <Box key={index} sx={{ flex: '1 0 30%', margin: '0 10px' }}>  {/* Adjusting item width */}
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={`Media ${index + 1}`}
                  style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
                  onClick={() => handleOpen(media)}
                />
              ) : (
                <video
                  src={media.src}
                  style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
                  onClick={() => handleOpen(media)}
                  controls
                  // controls={false}  // Show only video thumbnail in grid
                />
              )}
            </Box>
          ))}
        </Box>

        {/* Next Arrow */}
        <IconButton onClick={nextItems} sx={{ marginLeft: 2 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

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
          ) : selectedMedia && (
            <video
              src={selectedMedia.src}
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

export default CarouselGallery;
