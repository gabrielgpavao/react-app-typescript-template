import React, { createContext } from 'react';
import { iProviderChildrenProps } from './interfaces';

export const UserContext = createContext({})

export function UserProvider ({ children }: iProviderChildrenProps) {
	return (
		<UserContext.Provider value={{}}>
			{children}
		</UserContext.Provider>
	)
}
