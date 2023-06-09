import { Box, Modal } from '@mui/material';
import { Children } from 'react';

function EditModal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="rounded-lg dark:text-black">
        {children}
      </Box>
    </Modal>
  );
}

export default EditModal;
