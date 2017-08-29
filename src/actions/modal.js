export const MODAL_OPEN_MODAL = 'OPEN_MODEL';
export const MODAL_CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(content, closeable = true) {
  return {
    type: MODAL_OPEN_MODAL,
    payload: {
      content,
      closeable,
    },
  };
}

export function closeModal() {
  return {
    type: MODAL_CLOSE_MODAL,
  };
}

