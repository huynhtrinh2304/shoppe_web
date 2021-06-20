const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const box = $('.home-product .grid__row')


const control = {




    products:

        [

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Nồi Chiên Không Dầu Tiện Lợi NineShield - Công Nghệ Nhật - Hàng Chính Hãng[ GIẢM GIÁ SỐC HÔM NAY]',
                img: 'https://cf.shopee.vn/file/c24a9c9022460cfd63ad842d819f3206_tn',
                notSale: '₫600.000',
                sale: '₫300.000',
                sold: 'Đã bán 10,3k',
                made: 'Hà Nội',
                salePercent: '10%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },

            {
                nameProduct: 'Tai nghe bluetooth i12 TWS 5.0 bản Quốc tế âm thanh chuẩn HIFI tai nghe không dây i12 dùng cho IOS Android',
                img: 'https://cf.shopee.vn/file/2715751d30043fe9148e6614700ab63b_tn',
                notSale: '₫199.000',
                sale: '₫139.000',
                sold: 'Đã bán 20,3k',
                made: 'Hà Nội',
                salePercent: '30%',
            },


            

        ],


    render: function () {


        var htmls = this.products.map(function (value) {
            return `<div class="grid__col-2-4 ">
            <div class="home-product-item">
            <div class="home-product-item-img"
            style="background-image:url(${value.img});">
        </div>
        <h4 class="home-product-item-name">${value.nameProduct}</h4>
        <div class="home-product-item-price">
            <span class="home-product-item-price-old">${value.notSale}</span>
            <span class="home-product-item-price-new">${value.sale}</span>
        </div>
        <div class="home-product-item-action">
            <span class="action-like action-like-liked">
                <i class="like-icon-empty far fa-heart"></i>
                <i class="like-icon-fill fas fa-heart"></i>

            </span>

            <div class="home-product-item-rating">
                <i class="home-product-item-rating-gold fas fa-star"></i>
                <i class="home-product-item-rating-gold fas fa-star"></i>
                <i class="home-product-item-rating-gold fas fa-star"></i>
                <i class="home-product-item-rating-gold fas fa-star"></i>
                <i class="home-product-item-rating-gold fas fa-star"></i>
            </div>
            <span class="home-product-item-sold">${value.sold}</span>

        </div>
        <div class="home-product-item-origin">
            <span class="home-product-item-origin-brand"></span>
            <span class="home-product-item-oriagin-name">${value.made}</span>
        </div>
        <div class="home-product-item-favourite">
            <i class="fas fa-check"></i>
            <span>Yêu thích </span>
        </div>
        <div class="home-product-item-sale-off">
            <span class="home-product-item-sale-off-percent">${value.salePercent}</span>
            <span class="home-product-item-sale-off-label">GIẢM</span>
        </div>
        </div>
        </div>
        `


        })

        box.innerHTML = htmls.join('')


    },


    start: function () {
        this.render()
    }












}


control.start();
