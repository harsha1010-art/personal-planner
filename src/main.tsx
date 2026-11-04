import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/instrument-sans'
import './index.css'
import { Shell } from './components/Shell'
import { Today } from './pages/Today'
import { Learn, Topic } from './pages/Learn'
import { PlanPage } from './pages/Plan'
import { Practice } from './pages/Practice'
import { TestRunner } from './pages/TestRunner'
import { Result } from './pages/Result'
import { Mains, MainsDesk } from './pages/Mains'
import { Progress } from './pages/Progress'
import { Syllabus } from './pages/Syllabus'
import { Sociology } from './pages/Sociology'
import { Cards } from './pages/Cards'
import { Guide } from './pages/Guide'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/test/:setId" element={<TestRunner />} />
        <Route element={<Shell />}>
          <Route index element={<Today />} />
          <Route path="day/:date" element={<Today />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:date" element={<Topic />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="practice" element={<Practice />} />
          <Route path="result/:attemptId" element={<Result />} />
          <Route path="mains" element={<Mains />} />
          <Route path="mains/:questionId" element={<MainsDesk />} />
          <Route path="progress" element={<Progress />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="sociology" element={<Sociology />} />
          <Route path="cards" element={<Cards />} />
          <Route path="guide" element={<Guide />} />
          <Route path="*" element={<Today />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
