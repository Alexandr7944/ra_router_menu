import { DriftPage, ForzaPage, HomePage, TimeAttackPage } from "../components";

export const routes = [
  { path: '/', element: HomePage },
  { path: '/drift', element: DriftPage },
  { path: '/timeattack', element: TimeAttackPage },
  { path: '/forza', element: ForzaPage },
]