import { BASE_COLORS_INPUT_PATH } from '../../../../constants';
import { getListElementPerColorObject } from '../../get-list-element-per-color-object';

export const getJsonBaseColors = () =>
  getListElementPerColorObject(BASE_COLORS_INPUT_PATH);
