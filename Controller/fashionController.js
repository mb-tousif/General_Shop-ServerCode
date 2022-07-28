import Fashion from "../model/fashionSchema.js"

export const getFashionData = async (req, res) => {
    try {
        const fashion = await Fashion.find({});
        res.status(200).json(fashion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 