import "../style/AddNewProduct.scss";

export default function AddNewProduct() {
    return (
        <>
            <h1>Add New Products</h1>
            <form action="" method="post">
                <input type="text" name="productName" id="productName" placeholder="Product Name"/>
                <input type="file" name="" id="" />
                <div className="images"></div>
                <input type="number" name="price" id="price" placeholder="price"/>
                <input type="number" name="inStock" id="inStock" placeholder="in Stock"/>
                <div>
                    <input type="checkbox" name="discount" id="discount"/>
                    <p>Discount</p>
                    <input type="number" name="" id="" />
                </div>
                <textarea name="shortDiscription" id="shortDiscription" cols="30" rows="10"></textarea>
                <textarea name="longDiscription" id="longDiscription" cols="30" rows="10"></textarea>
                <input type="text" name="keywords" id="keywords" />
                <input type="submit" value="Add product" />
            </form>
        </>
    )
}