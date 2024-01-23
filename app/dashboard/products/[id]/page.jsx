import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill />
            </div>
            Macbook
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Macbook Pro 14" />
                <label>Price</label>
                <input type="number" name="price" placeholder="2500" />
                <label>Stock</label>
                <input type="number" name="stock" placeholder="15" />
                <label>Color</label>
                <input type="text" name="color" placeholder="Black" />
                <label>Size</label>
                <input type="text" name="size" placeholder="14 Inch" />
                <label>Cat</label>
                <select name="cat" id="cat">
                    <option value="computer">Computer</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage