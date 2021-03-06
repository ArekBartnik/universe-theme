export type Dictionary<Value = any> = {
  [key: string]: Value;
};

export interface EditorColors {
  [key: string]: string | Dictionary<string>;
}

export type TokenColors = Array<TokenColor>;

export interface TokenColor {
  name: string;
  scope: string | Array<string>;
  settings: Settings;
}

interface Settings {
  foreground?: string;
  fontStyle?: 'italic' | 'bold' | 'underline' | '';
}
