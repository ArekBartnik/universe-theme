import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';
import { violet_1 } from '../palette/violet.colors';
import { yellow_1 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: green_1,
    conflictingResourceForeground: yellow_1,
    deletedResourceForeground: red_1,
    ignoredResourceForeground: slate_1,
    modifiedResourceForeground: blue_1,
    submoduleResourceForeground: slate_0,
    untrackedResourceForeground: violet_1
  }
};

export default gitColors;
