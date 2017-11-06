export const MODAL_OPEN_MODAL = 'OPEN_MODEL';
export const MODAL_CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(id, content, closeable = true) {
  return {
    type: MODAL_OPEN_MODAL,
    id,
    payload: {
      content,
      closeable,
    },
  };
}

export function closeModal(id) {
  return {
    id,
    type: MODAL_CLOSE_MODAL,
  };
}

