import Fashion from "../model/fashionSchema.js"

export const getFashionData = async (req, res) => {
    try {
        const fashion = await Fashion.find({});
        res.status(200).json(fashion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getFashionById = async (req, res) => {
  try {
    // const id = req.params.id;
    const fashion = await Fashion.findOne({"_id": req.params.id});
    res.status(200).json(fashion)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
