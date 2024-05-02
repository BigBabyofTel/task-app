"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { ThemeSwitcher } from "./components/themeswitcher";
import Header from "./components/header";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Header />
      <Card className="w-1/5 m-5 p-2 border">
        <CardHeader>
          <h2>Control Bar</h2>
        </CardHeader>
        <CardBody>
        <Button onClick={onOpen} color="primary" variant="shadow">
          Create Task
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="5xl"
          placement="bottom-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create Task
                </ModalHeader>
                <ModalBody>
                  <Input
                  label='Task Name'
                  placeholder="Enter the name of task"
                  variant="bordered"
                  />
                  <Input
                  label='Task Details'
                  placeholder="Enter task details"
                  variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Save Task
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        </CardBody>
      </Card>
    </>
  );
}
