export const tokenColors = [];

export const some = {
  name: "STRING's",
  scope: [
    'source.ts string',
    'source.ts string.constant.other.placeholder',
    'source.ts string.entity',
    'source.ts string.escape',
    'source.ts string.quoted.double',
    'source.ts string.quoted.single',
    'source.ts string.regexp',
    'source.ts string.tag',
    'source.ts string.template',
    'source.ts string.value'
  ],
  settings: { foreground: '#BE5d', fontStyle: '' }
};

export interface FontStyle {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}
export interface Settings {
  name?: string | null;
  scope: string[];
  foreground?: string | null;
  fontStyle?: FontStyle | null;
  toString: () => string;
}

export class Setting implements Settings {
  public name?: string | null;
  public scope: string[];
  public foreground: string | null;
  public fontStyle: FontStyle | null;
  private _source: string;
  get source() {
    return this._source;
  }
  constructor(source: string) {
    this._source = source;
  }

  public toString() {
    let foreground: string = '';
    if (this.foreground != null) {
      foreground = `"foreground": "${this.foreground.trim()}"`;
    }

    let fontStyle: string = '';
    if (this.fontStyle != null) {
      const { bold, italic, underline } = this.fontStyle;
      fontStyle += bold ? 'bold ' : '';
      fontStyle += italic ? 'italic ' : '';
      fontStyle += underline ? 'underline ' : '';
      fontStyle = `"fontStyle": "${fontStyle.trim()}"`;
    }
    const name = !!this.name ? `"name": "${this.name.trim()},"` : '';
    const settingsSeparator: string = !!fontStyle && !!foreground ? ',' : '';
    const settings = `"settings": { ${foreground} ${settingsSeparator} ${fontStyle}`;
    return `{${name} ${settings}}`;
  }
}
