import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import SimpleForm from './scenes/SimpleForm'
import CreateFormHookExample from './scenes/CreateFormHookExamle'
import Validation from './scenes/Validation'
import ValidationAsync from './scenes/ValidationAsync'
import ValidationSchema from './scenes/ValidationSchema'
import ValidationLinked from './scenes/ValidationLinked'
import Arrays from './scenes/Arrays'
import Listeners from './scenes/Listeners'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>
          Simple
        </NavLink>
        <NavLink to="/create-form-hook">Create form hook</NavLink>
        <NavLink to="/validation">Validation</NavLink>
        <NavLink to="/validation-async">Validation async</NavLink>
        <NavLink to="/validation-schema">Validation schema</NavLink>
        <NavLink to="/validation-linked">Validation linked</NavLink>
        <NavLink to="/arrays">Arrays</NavLink>
        <NavLink to="/listeners">Listeners</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<SimpleForm />} />
        <Route
          path="/create-form-hook"
          element={
            <>
              <CreateFormHookExample />
              {/* <CreateFormHookExample /> */}
            </>
          }
        />
        <Route path="/validation" element={<Validation />} />
        <Route path="/validation-async" element={<ValidationAsync />} />
        <Route path="/validation-schema" element={<ValidationSchema />} />
        <Route path="/validation-linked" element={<ValidationLinked />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/listeners" element={<Listeners />} />
      </Routes>
    </BrowserRouter>
  )
}
