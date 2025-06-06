import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: var(--light-blue);
  padding: 3rem;
  border-radius: 10px;
  width: 350px;
  position: relative;
  h2 {
    color: var(--light-green);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    color: var(--light-green);
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid var(--light-green);
  background: var(--light-green);
  color: var(--light-blue);
  &::placeholder {
    color: var(--light-blue);
  }
`;

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.875rem;
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: var(--light-green);
`;

export const SwitchButton = styled.button`
  color: var(--light-green);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: inherit;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;
