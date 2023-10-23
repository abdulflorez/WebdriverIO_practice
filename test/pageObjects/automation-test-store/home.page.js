import BasePage from "./base.page.js";
import CategoryMenuComponent from "./components/category-menu-comp.js";

class HomePage extends BasePage {
  open() {
    return super.open("");
  }

  get categoryMenuComponent() {
    return CategoryMenuComponent;
  }
}

export default new HomePage();
