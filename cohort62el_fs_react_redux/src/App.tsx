import Lesson_17 from "lessons/Lesson_17/Lesson_17"
import Homework_17 from "homeworks/Homework_17/Homework_17"
// import Layout from "lessons/EmployeeProject/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "constants/routes"
import CreateEmployee from "lessons/EmployeeProject/CreateEmployee/CreateEmployee"
import Employees from "lessons/EmployeeProject/Employees/Employees"
import Layout from "lessons/WeatherProject/Loyout"
import Home from "lessons/WeatherProject/Home/Home"
import Weathers from "lessons/WeatherProject/Weathers/Weathers"


function App() {
  return (
    <BrowserRouter>      
      {/* <Lesson_17 /> */}
      {/* <Homework_17 /> */}
      {/* <Layout>
        <Routes>
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee/>}/>
          <Route path={ROUTES.EMPLOYEES} element={<Employees/>}/>
        </Routes>
      </Layout> */}
      <Layout>
        <Routes>
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={ROUTES.WEATHERS} element={<Weathers/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App
