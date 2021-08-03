import chalk from 'chalk'

class MenuListService{
  listMenu = [
    {
      level : 0,
      name: "Create user",
      text:  chalk.bold("Digite seu nome ")+chalk.bold.hex("#FF8900")("<ProjectBy..>")
    },
    {
      level : 1,
      name: "Select one system",
      text: chalk.bold.hex("#ABFF00")('Escolha qual sera o sistema a ser instalado')+
      chalk.bold.hex("#fff")('\n1 -> NodeJS(Puro) ')+
      chalk.bold.hex("#fff")('\n2 -> NodeJS(Typescript) ')+
      chalk.bold.hex("#fff")('\n3 -> NodeJS(NextJS) ')+
      chalk.bold.hex("#fff")('\n0 -> Sair')
    },
    {
      level : 2,
      name: "Select modules",
      text: chalk.bold.hex("#ABFF00")('Quais modulos voce quer?')+
      chalk.bold.hex("#FFD500")('\nCada modulo representa 1 numero, caso queira instalar mais de um, use / para separa cada modulo')+
      chalk.bold.hex("#FF002B")('\nEste sistema foi feito com o intuito de organizar seu projeto o mais limpo e organizado possivel, cada modulo instalado afetara o modo como os arquivos serão criados.')+
      chalk.bold.hex("#fff")('\n1 -> Express')+
      chalk.bold.hex("#fff")('\n2 -> MySQL<Puro>')+
      chalk.bold.hex("#fff")('\n3 -> MySQL<ORM>')+
      chalk.bold.hex("#fff")('\n4 -> PgSQL<Puro>')+
      chalk.bold.hex("#fff")('\n5 -> PgSQL<ORM>')+
      chalk.bold.hex("#fff")('\n6 -> JWT')+
      chalk.bold.hex("#fff")('\n6 -> Chalk')+
      chalk.bold.hex("#fff")('\n0 -> exit')
    }
  ]
}

export default MenuListService