import { EditorColors } from '../../types/colors-types';
import { slate_6 } from '../palette/slate.colors';
import { violet_0, violet_7, violet_9 } from '../palette/violet.colors';

const activityBarColors: EditorColors = {
  activityBar: {
    background: '#0f161e',
    dropBackground: violet_9,
    foreground: '#f4da55',
    inactiveForeground: slate_6,
    border: '#080c11'
  },
  activityBarBadge: {
    background: violet_7,
    foreground: violet_0
  }
};

export default activityBarColors;
