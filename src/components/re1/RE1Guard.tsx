import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const RE1Guard: React.FC<Props> = ({ children }) => {
  // TODO: Replace this with actual Supabase Auth & user_plans check
  // For MVP / Demo purposes, we allow access.
  // const { user } = useAuth();
  // const canAccessRE1 = user?.plan?.re1_access === true;
  
  const canAccessRE1 = true;

  if (!canAccessRE1) {
    // In a real app, this might go to an upgrade/pricing page
    return <Navigate to="/upgrade?feature=re1" />;
  }

  return <>{children}</>;
};
