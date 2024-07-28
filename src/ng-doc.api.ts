import {NgDocApi} from '@ng-doc/core';
import APIReferenceCategory from './app/api-reference/ng-doc.category';

const Api: NgDocApi = {
	title: 'API Reference',
	category: APIReferenceCategory,
	scopes: [
		{
			name: 'My Library',
			route: 'my-library',
			include: 'src/app/**/*.ts',
		},
	],
};

export default Api;
