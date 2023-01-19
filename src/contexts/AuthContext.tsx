import React, { createContext } from 'react';
import { iProviderChildrenProps } from './interfaces';

export const AuthContenxt = createContext({})

export function AuthContext ({ children }: iProviderChildrenProps) {
	return (
		<AuthContenxt.Provider value={{}}>
			{children}
		</AuthContenxt.Provider>
	)
}
