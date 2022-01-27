const { validationResult } = require('express-validator')
const catchAsync = require('../utils/catchAsync')
const Products = require('../models/product.model')

const productsController = {}


productsController.index = catchAsync(async (req, res) => {
    const products = await Products.getAll()

    res.status(200).json({
        status: true,
        data: products,
    })
})

// eslint-disable-next-line consistent-return
productsController.getById = catchAsync(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: errors,
        })
    }

    const { id } = req.params
    const product = await Products.getById(id)

    if (!product.length) {
        res.status(404).json({
            status: false,
            message: 'Error no product like this on server',
        })
    } else {
        res.status(200).json({
            status: true,
            data: product,
        })
    }
})

// eslint-disable-next-line consistent-return
productsController.create = catchAsync(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: errors,
        })
    }

    const { prodName, prodDesc, prodPrice } = req.body

    const product = {
        prodName,
        prodDesc,
        prodPrice,
    }

    const response = await Products.create(product)

    if (!response) {
        res.status(500).json({
            status: false,
            message: 'Error uploading to bd',
        })
    } else {
        res.status(200).json({
            status: true,
            message: 'Product added successfully',
        })
    }
})

// eslint-disable-next-line consistent-return
productsController.modify = catchAsync(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: errors,
        })
    }

    const { id } = req.params
    const { prodName, prodDesc, prodPrice } = req.body

    if (!id || !prodName || !prodDesc || !prodPrice) {
        res.status(400).json({
            status: false,
            message: 'Data missing when modifying',
        })
    } else {
        const response = await Products.change({
            id,
            prodName,
            prodDesc,
            prodPrice,
        })

        if (!response) {
            res.status(500).json({
                status: false,
                message: 'Error modifying the product',
            })
        } else {
            res.status(200).json({
                status: true,
                message: 'Product modified successfully',
            })
        }
    }
})

// eslint-disable-next-line consistent-return
productsController.remove = catchAsync(async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: errors,
        })
    }

    const { id } = req.params

    if (!id) {
        res.status(400).json({
            status: false,
            message: 'Data missing when modifying',
        })
    } else {
        const response = await Products.delete(id)

        if (!response) {
            res.status(500).json({
                status: false,
                message: 'Error deleting the product',
            })
        } else {
            res.status(200).json({
                status: true,
                message: 'Product deleted successfully',
            })
        }
    }
})

module.exports = productsController