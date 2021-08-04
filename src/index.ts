/**
 *  Criação automatica de projetos.
 * @author EduardoCastro<Skillerm>
 * @description Este modulo é responsável pela criação de um novo projeto
 * com uma estruturação limpa e com todas as dependências necessárias. Foi 
 * criado apenas para estudos, fique a vontade para modifica-lo
 * @version 1.0
 */

import MenuController from "./controllers/MenuController";

class CreateProject {
  init(){
    const Menu = new MenuController()
      Menu.handler({
        level: 0
      })
  }
}


new CreateProject().init()


//
//npmsIO
//  .api.package.packageInfo('express')
//  .then(data => {
//console.log(data);
//  });



//import CreateUserCacheController from "./controllers/CreateUserCacheController";
//import GetUserCacheController from "./controllers/GetUserCacheController";
//import UpdateUserCacheController from "./controllers/UpdateUserCacheController";
//
//const getUserCacheController = new GetUserCacheController();
//const createUserCacheController = new CreateUserCacheController();
//const updateUserCacheController = new UpdateUserCacheController();
//
//
//createUserCacheController.handler({
//  user:"Eduardo"
//})
//
//console.log(getUserCacheController.handler())
//
//updateUserCacheController.handler({
//  user: "Eduardo",
//  level: 1
//})
//
//console.log(getUserCacheController.handler())


//import NodeCache from "node-cache";
//const myCache = new NodeCache({stdTTL: 3600});
//
//const obj = { my: "Special", variable: 42 };
//myCache.set( "myKey", obj, 10000 );


//


//import CreateFolderController from "./controllers/CreateFolderController";
//const CriarProjeto = new CreateFolderController();
//
//
//CriarProjeto.execute({
//  folderName: "teste"
//})


//const User = new UserTmpJsonController({
//  userName: "Eduardo"
//})

//console.log(User.handler())