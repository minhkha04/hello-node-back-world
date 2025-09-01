/**
 * @swagger
 * /api/food-types:
 *   get:
 *     description: Get food types
 *     tags: [User]
 *     responses:
 *       200:
 *         description: success
 */

/**
 * @swagger
 * /api/v1/user/updateUser/{id}:
 *   put:
 *     description: Update user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *     responses:
 *       200:
 *         description: Update success
 */
