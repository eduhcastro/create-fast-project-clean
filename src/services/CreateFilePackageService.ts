import fs from 'fs'
import PackageTemplate from '../models/PackageTS.Modal';
import ConfigureFilePackageService from './ConfigureFilePackageService';

interface ICreateFilePackageService{
  modules: object
  author: string
  name: string
  system: string
  path: string
}

class CreateFilePackageService{
  async execute({
    modules,
    author,
    name,
    system,
    path
  }: ICreateFilePackageService){
    return new Promise((resolve, reject) => {
      const packageTemplate = new ConfigureFilePackageService({
        modules,
        author,
        name,
        system,
      });

      console.log(packageTemplate.handler())

      fs.writeFile(`./projects/${path}/package.json`, JSON.stringify(PackageTemplate), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      })
    })
  }
}

export default CreateFilePackageService

