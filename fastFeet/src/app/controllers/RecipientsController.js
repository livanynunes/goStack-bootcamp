import Recipients from '../models/Recipients';

import * as Yup from 'yup';

class Recipientscontroller {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            complement: Yup.string(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            zip_code: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failes' });
        }

        const recipient = await Recipients.create(req.body);

        return res.json(recipient);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string(),
            street: Yup.string(),
            number: Yup.number(),
            complement: Yup.string(),
            state: Yup.string(),
            city: Yup.string(),
            zip_code: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failes' });
        }

        const recipientId = await Recipients.findByPk(req.body.id);

        if (!recipientId) {
            return res.status(400).json({ error: 'Recipient does not exists' });
        }

        const recipient = await recipientId.update(req.body);

        return res.json(recipient);
    }
}

export default new Recipientscontroller();
