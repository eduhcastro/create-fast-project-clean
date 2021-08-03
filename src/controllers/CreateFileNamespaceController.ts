/// <reference path="../services/ConfigureFilePackageService.ts" />
const chalk = require('chalk')

namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator{
    isAcceptable(s: string) {
      console.log(chalk.green('isAcceptable called'))
      return lettersRegexp.test(s);
    }
  }
}