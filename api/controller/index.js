import { version } from '../../package.json';
import { Router } from 'express';
import crud from './crud';

export default ({ config}) => {
	let api = Router();

	// mount the facets resource
	api.use('/crud', crud({config}));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}