import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ObjectsList = lazy(() => import('./pages/objects/ObjectsList'));
const ObjectDetail = lazy(() => import('./pages/objects/ObjectDetail'));
const ObjectConfig = lazy(() => import('./pages/objects/ObjectConfig'));
const RecordsList = lazy(() => import('./pages/records/RecordsList'));
const RecordDetail = lazy(() => import('./pages/records/RecordDetail'));
const Settings = lazy(() => import('./pages/settings/Settings'));
const UsersList = lazy(() => import('./pages/users/UsersList'));
const UserDetail = lazy(() => import('./pages/users/UserDetail'));
const Login = lazy(() => import('./pages/auth/Login'));

function App() {
  // For demo purposes, we'll assume the user is authenticated
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Login />
      </Suspense>
    );
  }

  return (
    <ErrorBoundary>
      <AppLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Objects routes */}
            <Route path="/objects" element={<ObjectsList />} />
            <Route path="/objects/:id" element={<ObjectDetail />} />
            <Route path="/objects/:id/config" element={<ObjectConfig />} />
            
            {/* Records routes */}
            <Route path="/objects/:objectId/records" element={<RecordsList />} />
            <Route path="/objects/:objectId/records/:id" element={<RecordDetail />} />
            
            {/* Settings routes */}
            <Route path="/settings" element={<Settings />} />
            
            {/* Users routes */}
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserDetail />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </ErrorBoundary>
  );
}

export default App;