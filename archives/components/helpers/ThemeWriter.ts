import { fileToWrite } from './file-read-write';

export class ThemeWriter {
  private $schema: string;
  private name: string;
  private type: string;
  private colors: string;

  constructor(name: string) {
    this.$schema = 'vscode://schemas/color-theme';
    this.name = name || 'Pop N Lock Theme by Luxcium';
    this.type = 'light';
    this.colors = 'place holder';
  }
  public write() {
    return `{
      "$schema":"${this.$schema}"
      "name":"${this.name}"
      "type":"${this.type}"
      "colors":"${this.colors}"
    }`;
  }
  /*
   "$schema": "vscode://schemas/color-theme",
  "name": "Pop N Lock Theme by Luxcium",
  "type": "dark",
  "colors": {
 */
}

fileToWrite;
