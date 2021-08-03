import MenuService from "../services/MenuService"

interface IMenuController{
  level: number;
}

class MenuController{
    handler({
        level
    } : IMenuController){
        const instaceMenuService = new MenuService()
        instaceMenuService.execute()
    }
}

export default MenuController