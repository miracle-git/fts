import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbol';
import {
	Type,
	Key,
	Ref,
	Props,
	ElementType,
	ReactElementType
} from 'shared/ReactType';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'mate-react'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...children: any) => {
	let key: Key, ref: Ref;
	const props: Props = {};
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key' && val !== undefined) {
			key = '' + val;
			continue;
		}
		if (prop === 'ref' && val !== undefined) {
			ref = val;
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const len = children.length;
	props.children = len === 1 ? children[0] : children;
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key, ref: Ref;
	const props: Props = {};
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key' && val !== undefined) {
			key = '' + val;
			continue;
		}
		if (prop === 'ref' && val !== undefined) {
			ref = val;
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};
