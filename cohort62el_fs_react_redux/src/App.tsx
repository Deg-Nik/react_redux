import Lesson_17 from "lessons/Lesson_17/Lesson_17"
import Homework_17 from "homeworks/Homework_17/Homework_17"
import Layout from "lessons/EmployeeProject/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "constants/routes"
import CreateEmployee from "lessons/EmployeeProject/CreateEmployee/CreateEmployee"
import Employees from "lessons/EmployeeProject/Employees/Employees"

function App() {
  return (
    <BrowserRouter>      
      {/* <Lesson_17 /> */}
      {/* <Homework_17 /> */}
      <Layout>
        <Routes>
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee/>}/>
          <Route path={ROUTES.EMPLOYEES} element={<Employees/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
