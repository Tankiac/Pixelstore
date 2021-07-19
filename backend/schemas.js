import Joi from "joi";
import sanitizeHtml from "sanitize-html";

const extension = (joi) => ({
    type: "string",
    base: joi.string(),
    messages: {
        "string.escapeHTML": "{{#label}} must not include HTML!"
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error("string.escapeHTML", { value })
                return clean;
            }
        }
    }
});

const JoiExtended = Joi.extend(extension);

const reviewSchema = JoiExtended.object({
    review: JoiExtended.object({
        title: JoiExtended.string().required().escapeHTML(),
        text: JoiExtended.string().required().escapeHTML(),
        rating: JoiExtended.number(),
    })
});

export { reviewSchema };
