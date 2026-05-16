exports.login = (req, res) => {
  const { email, password } = req.body;

  const USER = {
    email: "myapp@gmail.com",
    password: "123456"
  };

  // validation
  if (!email) {
    return res.status(400).json({
      success: false,
      field: "email",
      message: "Email is required"
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      field: "password",
      message: "Password is required"
    });
  }

  if (password.length !== 6) {
    return res.status(400).json({
      success: false,
      field: "password",
      message: "Password must be 6 digits"
    });
  }

  // check credentials
  if (email === USER.email && password === USER.password) {
    return res.json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password"
  });
};