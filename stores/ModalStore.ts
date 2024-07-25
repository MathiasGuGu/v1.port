import {create} from "zustand";


enum ModalState {
    OPEN = 1,
    CLOSED = 0
}

type AiModal = {
    modalState: ModalState
}

export const useAiModalStore = create<AiModal>()((set) => ({
    modalState: ModalState.CLOSED,
}))