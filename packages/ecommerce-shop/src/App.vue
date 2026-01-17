<template>
    <div class="ecommerce-shop">
        <!-- Header Navigation -->
        <header class="header">
            <IkFlex class="header-content"
                    align="center"
                    justify="space-between">
                <div class="logo">
                    <IkLink to="/"
                            plain>
                        <h1 class="logo-text">Shop</h1>
                    </IkLink>
                </div>
                <IkFlex class="nav-links"
                        align="center"
                        spacing_x="24">
                    <IkLink to="/"
                            plain>Home</IkLink>
                    <IkLink to="/products"
                            plain>Products</IkLink>
                    <IkLink to="/about"
                            plain>About</IkLink>
                    <IkLink to="/contact"
                            plain>Contact</IkLink>
                    <IkButton design="default"
                              icon="shopping-cart"
                              plain />
                </IkFlex>
            </IkFlex>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <h2 class="section-title">Featured Products</h2>
                <IkGrid spacing_x="8"
                        spacing_y="8">
                    <IkGridItem xxs-12 xs-6 sm-4 md-3
                                v-for="product in products"
                                :key="product.id"
                                class="product-card">
                        <div class="product-image-wrapper">
                            <IkImage :src="product.image"
                                     :alt="product.name"
                                     cover
                                     lazy
                                     class="product-image" />
                            <IkBadge v-if="product.sale"
                                     design="error"
                                     class="sale-badge">
                                Sale
                            </IkBadge>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">{{ product.name }}</h3>
                            <p class="product-category">{{ product.category }}</p>
                            <div class="product-price">
                                <span v-if="product.originalPrice"
                                      class="original-price">
                                    ${{ product.originalPrice }}
                                </span>
                                <span class="current-price">${{ product.price }}</span>
                            </div>
                            <IkButton design="primary"
                                      class="add-to-cart-btn"
                                      @click="addToCart(product)">
                                Add to Cart
                            </IkButton>
                        </div>
                    </IkGridItem>
                </IkGrid>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <IkFlex class="footer-content"
                        align="center"
                        justify="space-between">
                    <p class="footer-text">© 2025 Shop. All rights reserved.</p>
                    <IkFlex class="footer-links"
                            spacing_x="24">
                        <IkLink to="/privacy"
                                plain>Privacy</IkLink>
                        <IkLink to="/terms"
                                plain>Terms</IkLink>
                        <IkLink to="/shipping"
                                plain>Shipping</IkLink>
                    </IkFlex>
                </IkFlex>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkGrid, IkGridItem } from '@ikol/ui-kit/components/IkGrid';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkLink } from '@ikol/ui-kit/components/IkLink';
import { IkBadge } from '@ikol/ui-kit/components/IkBadge';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    sale?: boolean;
}

const products = ref<Product[]>([
    {
        id: 1,
        name: 'Minimalist Watch',
        category: 'Accessories',
        price: 129,
        originalPrice: 179,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        sale: true
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 199,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
        id: 3,
        name: 'Leather Backpack',
        category: 'Bags',
        price: 249,
        originalPrice: 299,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        sale: true
    },
    {
        id: 4,
        name: 'Sunglasses',
        category: 'Accessories',
        price: 89,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop'
    },
    {
        id: 5,
        name: 'Smart Speaker',
        category: 'Electronics',
        price: 149,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
    },
    {
        id: 6,
        name: 'Canvas Sneakers',
        category: 'Footwear',
        price: 79,
        originalPrice: 99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        sale: true
    },
    {
        id: 7,
        name: 'Coffee Maker',
        category: 'Home',
        price: 159,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop'
    },
    {
        id: 8,
        name: 'Desk Lamp',
        category: 'Home',
        price: 69,
        image: 'https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=400&h=400&fit=crop'
    }
]);

const addToCart = (product: Product) => {
    console.log('Added to cart:', product.name);
    // Add to cart logic here
};
</script>

<style scoped>
.ecommerce-shop {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fafafa;
}

/* Header */
.header {
    background: #ffffff;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.logo-text {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
    letter-spacing: -0.5px;
}

.nav-links {
    font-size: 15px;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 48px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.section-title {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 32px 0;
    color: #1a1a1a;
    letter-spacing: -0.5px;
}

/* Product Card */
.product-card {
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid #e5e5e5;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background: #f5f5f5;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.sale-badge {
    position: absolute;
    top: 12px;
    right: 12px;
}

.product-info {
    padding: 20px;
}

.product-name {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #1a1a1a;
}

.product-category {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.product-price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
}

.original-price {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
}

.current-price {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
}

.add-to-cart-btn {
    width: 100%;
}

/* Footer */
.footer {
    background: #ffffff;
    border-top: 1px solid #e5e5e5;
    padding: 32px 0;
    margin-top: 64px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.footer-text {
    font-size: 14px;
    color: #666;
    margin: 0;
}

.footer-links {
    font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 16px;
    }

    .nav-links {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .section-title {
        font-size: 24px;
    }

    .footer-content {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
}
</style>
