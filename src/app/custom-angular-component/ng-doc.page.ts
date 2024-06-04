import {NgDocPage} from '@ng-doc/core';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

const CustomAngularComponentPage: NgDocPage = {
	title: `Custom Angular Component`,
	mdFile: './index.md',
	keyword: 'CustomAngularComponentPage',
	imports: [ContentWrapperComponent]
};

export default CustomAngularComponentPage;
