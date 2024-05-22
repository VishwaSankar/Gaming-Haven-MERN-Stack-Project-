// review.controller.js

import Reviews from '../model/reviewmodel.js';

export const createReview = async (req, res) => {
 const { gamename, star, desc } = req.body;
  const userId = req.userId; // Assuming you have user information in req.user
  const { username, img } = req.body; // Assuming you have username and img in req.user

  try {
    const review = new Reviews({
      gamename,
      userId,
      username,
      img,
      star,
      desc,
    });

    await review.save();

    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Reviews.find({ gamename: id });

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const deleteReview = async (req, res) => {
  const { revId } = req.params;
  const userId = req.userId;

  try {
    console.log('Deleting review ID:', revId);

    const review = await Reviews.findById(revId);

    if (!review) {
      console.log('Review not found');
      return res.status(404).json({ error: 'Review not found' });
    }

    if (review.userId !== userId) {
      console.log('Unauthorized');
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const deletedReview = await Reviews.findByIdAndDelete(revId);

    if (!deletedReview) {
      console.log('Review not found after deletion');
      return res.status(404).json({ error: 'Review not found' });
    }

    console.log('Review deleted successfully');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

