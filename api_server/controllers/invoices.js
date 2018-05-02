import Invoice from '../models/invoices';

class InvoicesControllers {
    /* eslint-disable no-param-reassign */

    /**
     * Get all cities
     * @param {ctx} Koa Context
     */
    async find(ctx) {
        let page = 0
        if (ctx.request.query.page !== undefined) {
            page = parseInt(ctx.request.query.page)
        }
        let pageSize = 20
        if (ctx.request.query.pageSize !== undefined) {
            pageSize = parseInt(ctx.request.query.pageSize)
        }
        ctx.body = await Invoice.find().sort({createdDate: -1}).limit(pageSize).skip(page * pageSize);
    }

    /**
     * Find a invoice
     * @param {ctx} Koa Context
     */
    async findById(ctx) {
        try {
            const invoice = await Invoice.findById(ctx.params.id);
            if (!invoice) {
                ctx.throw(404);
            }
            ctx.body = invoice;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    /**
     * Add a invoice
     * @param {ctx} Koa Context
     */
    async add(ctx) {
        try {
            const invoice = {
                createdDate: ctx.request.body.createdDate,
                type: ctx.request.body.type,
                price: ctx.request.body.price,
                comment: ctx.request.body.comment
            }
            const result = await new Invoice(invoice).save();
            ctx.body = result;
        } catch (err) {
            ctx.throw(422);
        }
    }

    /**
     * Update a invoice
     * @param {ctx} Koa Context
     */
    async update(ctx) {
        try {
            const invoice = {
                createdDate: ctx.request.body.createdDate,
                type: ctx.request.body.type,
                price: ctx.request.body.price,
                comment: ctx.request.body.comment
            }
            const result = await Invoice.findByIdAndUpdate(
                ctx.params.id,
                invoice
            );
            if (!result) {
                ctx.throw(404);
            }
            ctx.body = result;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    /**
     * Delete a invoice
     * @param {ctx} Koa Context
     */
    async delete(ctx) {
        try {
            const invoice = await Invoice.findByIdAndRemove(ctx.params.id);
            if (!invoice) {
                ctx.throw(404);
            }
            ctx.body = invoice;
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

    /* eslint-enable no-param-reassign */
}

export default new InvoicesControllers();
