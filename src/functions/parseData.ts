// TOML's parse() function but with error handling

import * as TOML from 'toml';

export function parse(input: string): ReturnType<typeof TOML.parse> {
	let result = null;
	try {
		result = TOML.parse(input);
	} catch (error) {
		console.error(`Failed to parse TOML data:\n ${JSON.stringify(error, null, 4)}.`);
	}
	return result;
}
