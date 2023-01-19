import React, { createContext } from 'react';
import { iProviderChildrenProps } from './interfaces';

export const AuthContext = createContext({})

export function AuthProvider ({ children }: iProviderChildrenProps) {
	return (
		<AuthContext.Provider value={{}}>
			{children}
		</AuthContext.Provider>
	)
}
