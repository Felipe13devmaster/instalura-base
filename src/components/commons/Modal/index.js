import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
        opacity: 0;
        pointer-events: none;
      `;
  }}
`;
// pointer events:none permite que vc selecione os elementos abaixo desta camada
const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');// Pega o elemento pai mais proximo que tenha este data-attribute.
      if (!isSafeArea) onClose();
    }}
  >
    <motion.div
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: '100%',
        },
      }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      {children({ 'data-modal-safe-area': 'true' })}
    </motion.div>
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
