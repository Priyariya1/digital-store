// Download product route
router.get('/:productId/download', authenticateToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;

    // Check if the user has purchased the product
    const order = await prisma.order.findFirst({
      where: {
        productId,
        userId,
        status: 'completed'
      }
    });

    if (!order) {
      return res.status(403).json({ error: 'You have not purchased this product' });
    }

    // Get the product details
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update download count
    await prisma.product.update({
      where: { id: productId },
      data: { downloads: { increment: 1 } }
    });

    // Redirect to the file URL for download
    res.redirect(product.fileUrl);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to process download request' });
  }
}); 