import chalk from 'chalk';

export function printSectionTitle(title: string) {
    console.log(chalk.cyan(title));
    console.log(chalk.cyan('-------------------------------------------------------------'));
}

export function printExampleTitle(code: string, title: string) {
    console.log(`${chalk.cyan(code)} - ${chalk.blue(title)}`);
}

export function printResult (result: any) {
    console.log(chalk.green(result));
}