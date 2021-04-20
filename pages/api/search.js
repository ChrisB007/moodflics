import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
    const {db} = await connectToDatabase();

    //Query data

    const data = await db.collection("moods").aggregate();



    res.status(200).json({ name: 'John Doe' })
  }