import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class Day1Service {
  public async solveSilverTaskForDay1() {
    const coordinates = await this.readInputDataFromProvider();
    let sum = 0;
    for (const coordinate of coordinates) {
      sum += this.getFirstAndLastNumber(coordinate);
    }
    return sum;
  }
  public async solveGoldTaskForDay1() {
    const coordinates = await this.readInputDataFromProvider(true);
    let sum = 0;
    for (const coordinate of coordinates) {
      sum += this.getFirstAndLastNumber(coordinate);
    }
    return sum;
  }
  private async readInputDataFromProvider(parse = false) {
    const txt = await fs.readFile('src/days/day-1/data/data.txt', 'utf-8');
    return parse ? this.findNumberAndReplace(txt).split('\n') : txt.split('\n');
  }
  private getFirstAndLastNumber(str: string) {
    const numbers = str.match(/\d/g).join('');
    const numberAsText = `${numbers.substring(0, 1)}${numbers.substring(
      numbers.length - 1,
    )}`;
    return numberAsText.length === 2 ? parseInt(numberAsText) : 0;
  }
  private findNumberAndReplace(str: string) {
    return str
      .replaceAll('one', 'one1one')
      .replaceAll('two', 'two2two')
      .replaceAll('three', 'three3three')
      .replaceAll('four', 'four4four')
      .replaceAll('five', 'five5five')
      .replaceAll('six', 'six6six')
      .replaceAll('seven', 'seven7seven')
      .replaceAll('eight', 'eight8eight')
      .replaceAll('nine', 'nine9nine');
  }
}
