import type { LayoutServerLoad } from './$types';
import { ResContent } from '../static/resContent';
import { PHONE_NUMBER } from '$env/static/private';

/**
 *  To make the session available across the UI, including pages and layouts,
 * it's crucial to pass the session as a parameter in the root layout's server load function.
 */
export const load: LayoutServerLoad = async () => {
	const content = ResContent;
	const contacts = content.header.contacts;
	if (PHONE_NUMBER && contacts.findIndex((el) => el === PHONE_NUMBER) === -1) {
		content.header.contacts = [PHONE_NUMBER, ...content.header.contacts];
	}
	return {
		ResContent
	};
};
1