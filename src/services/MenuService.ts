import readline from "readline";
import MenuListService from "../services/MenuListService"
import GetConfigCacheController from "../controllers/GetConfigCacheController";

import InsertUserPhase from "../phases/InsertUserPhase";
import SelectSystemPhase from "../phases/SelectSystemPhase";
import SelectModulePhase from "../phases/SelectModulePhase";

/**
 * @class MenuService
 * @classdesc This class is responsible for the menu system,
 * it's the phase controller, where everything happens..
 */
class MenuService extends MenuListService {

    /**
     * @function selectPhase
     * @desc This function is responsible for selecting and filtering phases.
     * @param {number} index - The index of the phase.
     */
    private selectPhase(pharse: number){
        const search = this.listMenu.find(p => p.level === pharse)
        if(typeof search === "undefined"){
            throw new Error("Phrase not found")
        }
        if(typeof search.text === "undefined"){
            throw new Error("Phrase not found")
        }
        return search
    }

    /**
     * @function execute
     * @desc This function is responsible for executing the menu.
     */
    public execute() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        const question1 = () => {
            return new Promise((resolve, reject) => {
                rl.question(this.selectPhase(0).text + "\n", async (answer) => {
                    const insertUserPharse = new InsertUserPhase()
                    insertUserPharse.handler({
                        text: answer.toString().trim()
                    })
                    resolve(this)
                  })
            })
          }
        
          const question2 = () => {
            return new Promise((resolve, reject) => {
                rl.question(this.selectPhase(1).text + "\n", (answer) => {
                    const selectSystemPharse = new SelectSystemPhase()
                    selectSystemPharse.handler({
                        system: parseInt(answer)
                    })
                    resolve(this)
                  })
            })
          }

          const question3 = () => {
            return new Promise((resolve, reject) => {
                rl.question(this.selectPhase(2).text + "\n", async (answer) => {
                    const selectModulePhase = new SelectModulePhase()
                    await selectModulePhase.handler({
                        modules: answer
                    })
                    resolve(this)
                  })
            })
          }
        
          const teste = new GetConfigCacheController()

          const startQuets = async () => {
            await question1()
            await question2()
            await question3()
            console.log(teste.handler())
            rl.close()
          }
          
          startQuets()

    }

}

export default MenuService