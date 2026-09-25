export const errorHandler = (err, req, res, next) => {
  console.error('❌ Server Error:', err);

  const statusCode = err.statusCode || res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server ne thoda attitude dikha diya 😭',
    bhaiRoast: 'Arre bhai backend mein thoda short circuit ho gaya! Ek baar refresh maar ke retry kar!',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Arre bhidu, ye route toh exist hi nahi karta! 404 Not Found!',
    path: req.originalUrl,
  });
};
