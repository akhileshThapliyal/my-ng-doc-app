import {NgDocPage} from '@ng-doc/core';
import { NgDocLabelComponent, NgDocTagComponent } from '@ng-doc/ui-kit';
import { ButtonComponent } from '../button/button.component';
import { Button1Component } from '../button/button1.component';

const NgDocTagPage: NgDocPage = {
	title: `Ng Doc Tag`,
	mdFile: './index.md',
	demos: { 
		ButtonComponent,
		Button1Component,
		NgDocLabelComponent
	 },
	imports: [
		ButtonComponent,
		Button1Component,
		NgDocLabelComponent
	],
	playgrounds: {
		// TagPlayground: {
		//   target: NgDocTagComponent,
		//   template: `<ng-doc-selector>Tag Label</ng-doc-selector>`,
		// },
		ButtonPlayground: {
			target: ButtonComponent,
			template: `<ng-doc-selector>Tag Label</ng-doc-selector>`,
		  },
	  },
};

export default NgDocTagPage;
