import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const BoardPage = lazy(() => import('./Board'));
const BacklogPage = lazy(() => import('./Backlog'));
const Pages = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to={'/board'} replace={true} />} />
      <Route path="/board" Component={BoardPage} />
      <Route path="/backlog" Component={BacklogPage} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
  //Добавить fallback={<Loader/>} в Suspense
  return (
    <>
      <Suspense>{routes}</Suspense>
    </>
  );
};

export default Pages;
