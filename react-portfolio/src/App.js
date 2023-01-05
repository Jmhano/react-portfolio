import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
function App() {
  const [categories] = useState([
    {
      name: "ocean",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "doggos", description: "Portraits of people in my life" },
    { name: "travel", description: "Delicious delicacies" },
    {
      name: "fitness",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          <ContactForm></ContactForm>
        </div>
      </main>
    </div>
  );
}

export default App;
