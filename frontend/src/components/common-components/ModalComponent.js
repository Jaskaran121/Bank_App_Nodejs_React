import React from 'react';
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from '@chakra-ui/react';

const ModalComponent = ({isOpen,title,body,submitButtonText,handleSubmit,handleClose}) => {
  return (
      <Modal 
        blockScrollOnMount={false}
        size = "xl" 
        isOpen={isOpen} 
        onClose={handleClose}
     >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
               {title}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {body}
          </ModalBody>
          <ModalFooter>
            <Button variant="custom" onClick = {handleSubmit}>
                {submitButtonText || "Submit"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
 
export default ModalComponent;