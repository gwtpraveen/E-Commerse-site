import "../style/AddNewProducts.scss";
import { addProduct } from "../firebase/fireDatabase";
import { uploadProductImage } from "../firebase/fireStorage";
import { useState } from "react";
import { v4 } from "uuid";

export default function AddNewProduct() {
    const handleSubmit = e => {
        e.preventDefault();
        const productObject = {
            name: e.target.productName.value, 
            price: e.target.price.value,
            inStock: e.target.inStock.value,
            rating: 0,
            totalSold: 0,
            discount: e.target.discount.checked,
            discountPrecentage: e.target.discountPrecentage.value,
            descriptionShort: e.target.shortDescription.value,
            descriptionLong: e.target.longDescription.value,
            keywords: e.target.keywords.value.split(",")
        }
        addProduct(productObject);
        // uploadProductImage(e.target.mainImage.files[0]);
        // console.log(e.target.mainImage.files[0])
        // console.log(e.target.file.files[0])

    }
    const handleImageUpload = e => {
    console.log(e.target.value.split("\\"))
        const images = e.target.files;
        const [file] = e.target.files;
        e.target.parentElement.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
    return (
        <>
            <h1>Add New Products</h1>
            <form action="" method="post" onSubmit={handleSubmit} className="form">
                <div className="formGroup">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" id="productName" placeholder="Product Name" className="input"/>
                </div>
                <div className="images">
                    <label className="mainImage" data-link="">
                        <input type="file" onChange={handleImageUpload}/>
                        <p>Main Image</p>
                    </label>
                    <div className="subImages">
                        <label className="subImage">
                            <input type="file" onChange={handleImageUpload}/>
                        </label>
                        <label className="subImage">
                            <input type="file" onChange={handleImageUpload}/>
                        </label>
                        <label className="subImage">
                            <input type="file" onChange={handleImageUpload}/>
                        </label>
                        <label className="subImage">
                            <input type="file" onChange={handleImageUpload}/>
                        </label>
                    </div>
                </div>
                <div className="twoCol">
                    <div className="formGroup">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" placeholder="price" className="input"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="inStock">in Stock</label>
                        <input type="number" name="inStock" id="inStock" placeholder="in Stock" className="input inputNumber"/>
                    </div>
                </div>
                <div className="discount">
                    <input type="checkbox" name="discount" id="discount"/>
                    <p>Discount</p>
                    <input type="text" name="discountPrecentage" id="" placeholder="Precentage" className="input"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="shortDescription">Short Description</label>
                    <textarea className="textarea small" name="shortDescription" id="shortDescription" cols="30" rows="10" placeholder="Short Description"></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="longDescription">Long Description</label>
                    <textarea className="textarea big" name="longDescription" id="longDescription" cols="30" rows="10" placeholder="Long Description"></textarea>
                </div>
                <div className="keywordsDiv">
                    <input type="text" name="keywords" id="keywords" placeholder="key words"/>
                </div>
                <input type="submit" value="Add product" className="btn"/>
            </form>
        </>
    )
}