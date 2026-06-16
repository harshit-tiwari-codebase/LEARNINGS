export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Later you'll save this in the database
    const user = {
      username,
      email,
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    next(err);
  }
};