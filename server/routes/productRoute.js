import express from 'express';
import { upload } from '../configs/multer.js';
import { addProduct, ChangeStock, productById, productList } from '../controllers/productController.js';
import authSeller from '../middleware/authSeller.js';

const productRouter=express.Router();

productRouter.post('/add',upload.array(["images"]), authSeller, addProduct);
productRouter.get('/list',productList)
productRouter.get('/id',productById)
productRouter.post('/stock',authSeller,ChangeStock)

export default productRouter;