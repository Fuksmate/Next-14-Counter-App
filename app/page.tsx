'use client';

import {
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('');
  const [counterLabel, setCounterLabel] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const clear = () => {
    setValue('');
  };

  const counterWord = () => {
    const word = value.split(' ').length;
    setCounterLabel(`Your text has ${word} words`);
    onOpen();
  };

  const counterCharacter = () => {
    const character = value.length;
    onOpen();
    setCounterLabel(`Your text has ${character} characters`);
  };

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">Result</h3>
                <p className="text-lg font-medium">{counterLabel}</p>
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Textarea
        label="Your Text"
        placeholder="Enter your description"
        className="max-w-xs md:max-w-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonGroup isDisabled={!value}>
        <Button
          color="danger"
          onClick={() => {
            clear();
          }}
        >
          Clear
        </Button>
        <Button
          onClick={() => {
            counterWord();
          }}
        >
          Word
        </Button>
        <Button
          onClick={() => {
            counterCharacter();
          }}
          color="primary"
        >
          Character
        </Button>
      </ButtonGroup>
    </div>
  );
}
