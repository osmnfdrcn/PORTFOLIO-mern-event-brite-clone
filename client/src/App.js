import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMainSubMenu } from './features/app/appSlice'
import AppRoutes from "./routes/Routes";

function App() {
  const dispatch = useDispatch();
  const { showMainSubMenu } = useSelector((store) => store.app)

  useEffect(() => {
    window.addEventListener("click", () => dispatch(setShowMainSubMenu(false)))
    return () => {
      window.addEventListener("click", () => dispatch(setShowMainSubMenu(false)))
    }
  })
  return (
    <AppRoutes />
  )
}

export default App;
