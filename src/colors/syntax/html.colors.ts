import { TokenColors } from '../../types/colors-types';
import { gray_100 } from '../palette/gray.colors';
import { indigo_300 } from '../palette/indigo.colors';
import { orange_300 } from '../palette/orange.colors';
import { pink_300 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';

export const tagColor: string = purple_300;
export const componentColor: string = orange_300;
export const textColor: string = gray_100;
export const attributeColor: string = indigo_300;
export const directiveColor: string = orange_300;

const htmlColors: TokenColors = [
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Tag angle brackets',
    scope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Attribute',
    scope: ['meta.tag', 'meta.tag.inline.any'],
    settings: {
      foreground: attributeColor
    }
  },
  {
    name: 'Text',
    scope: 'text.html.derivative',
    settings: {
      foreground: textColor
    }
  },
  {
    name: 'Special character',
    scope: 'constant.character.entity',
    settings: {
      foreground: pink_300
    }
  },

  /**
   * Components
   */
  {
    name: 'Component tag',
    scope: 'entity.name.tag.other',
    settings: {
      foreground: componentColor
    }
  },
  {
    name: 'Component directives',
    scope: [
      'punctuation.definition.generic.begin.html',
      'punctuation.definition.generic.end.html',
      'meta.attribute.unrecognized'
    ],
    settings: {
      foreground: directiveColor
    }
  }
];

export default htmlColors;
