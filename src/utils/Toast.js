import Toast from 'react-native-simple-toast';
import colors from '../config/Colors';
import labels from '../assets/labels/English.labels';

/**
 * Displays a toast notification with a specified message and type.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @param {string} type - The type of the toast, which determines the background color.
 *                        Can be 'success', 'error', or any other string for a default color.
 */
export const showToast = (message, type, err) => {
  let backgroundColor =
    type == 'success'
      ? colors.c_7939FE
      : type == 'error'
      ? colors.red
      : colors.black;
  const customMessage =
    type == 'success' ? labels.success : labels.internalServerError;
  // let ar_message = err?.data?.ar_message || err?.ar_message;
  // let en_message = err?.data?.message || err?.message;
  // let _message = arabic ? ar_message : en_message;
  // console.log('_message', _message);

  return Toast.showWithGravity(
    message || customMessage,
    Toast.LONG,
    Toast.TOP,
    {
      backgroundColor: backgroundColor,
    },
  );
};
