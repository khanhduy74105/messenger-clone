'use client'

import { nb } from "date-fns/locale"
import Modal from "./Modal"
import Image from "next/image"

interface ImageModalProps {
    isOpen?: boolean,
    onClose: () =>  void,
    src: string | null
}
const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {

    if (!src) {
        return null
    }

  return (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
    >
        <div className="w-80 h-80">
            <Image
                src={src ||`/placeholder.jpeg`}
                alt="image"
                className="object-cover"
                fill
            />
        </div>
    </Modal>
  )
}

export default ImageModal