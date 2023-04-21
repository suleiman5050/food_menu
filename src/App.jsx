import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Category from "./Category";
const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(data.map((items) => items.category)),
  ]);
  const filterFunc = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newCategory = data.filter(
      (categories) => category === categories.category
    );
    setMenu(newCategory);
  };
  return (
    <main>
      <Title title={"Menu Items"} />
      <Category categories={categories} filterFunc={filterFunc} />
      <Menu menu={menu} />;
    </main>
  );
};
export default App;
