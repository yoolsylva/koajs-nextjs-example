import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import jwt from '../middlewares/jwt';
import InvoicesControllers from '../controllers/invoices';

const api = 'invoices';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

// GET /api/invoices
router.get('/', InvoicesControllers.find);

// POST /api/invoices
// This route is protected, call POST /api/authenticate to get the token
router.post('/', InvoicesControllers.add);

// GET /api/invoices/id
// This route is protected, call POST /api/authenticate to get the token
router.get('/:id', jwt, InvoicesControllers.findById);

// PUT /api/invoices/id
// This route is protected, call POST /api/authenticate to get the token
router.put('/:id', jwt, InvoicesControllers.update);

// DELETE /api/invoices/id
// This route is protected, call POST /api/authenticate to get the token
router.delete('/:id', jwt, InvoicesControllers.delete);

export default router;
