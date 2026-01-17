<template>
    <div class="ecommerce-shop">
        <!-- Header Navigation -->
        <header class="header">
            <IkFlex class="header-content"
                    grow_fixed_grow>
                <div class="logo">
                    <IkLink to="/">
                        <span class="logo-text ik-text--display-sm ik-text--bold">Shop</span>
                    </IkLink>
                </div>
                <IkFlex class="nav-links"
                        align="center"
                        spacing="8">
                    <IkLink to="/"
                            plain>Home</IkLink>
                    <IkLink to="/products"
                            plain>Products</IkLink>
                    <IkLink to="/about"
                            plain>About</IkLink>
                    <IkLink to="/contact"
                            plain>Contact</IkLink>
                </IkFlex>
                <IkFlex justify_end>
                    <IkButton design="primary"
                              flat
                              icon="shopping-cart"
                              circle />
                </IkFlex>
            </IkFlex>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <h2 class="section-title ik-text--display-md ik-text--semibold ik-mb-8">Featured Products</h2>
                <IkGrid spacing_x="8"
                        spacing_y="8">
                    <IkGridItem xxs-12
                                xs-6
                                sm-4
                                md-3
                                v-for="product in products"
                                :key="product.id"
                                class="product-card ik-radius-2 ik-shadow--xs">
                        <div class="product-image-wrapper">
                            <IkImage :src="product.image"
                                     :alt="product.name"
                                     cover
                                     lazy
                                     class="product-image" />
                            <IkChip v-if="product.sale"
                                    design="error"
                                    size="xs"
                                    class="sale-badge">
                                <IkIcon icon="tag"
                                        class="ik-mr-3"
                                        size_px="12" />
                                Sale
                            </IkChip>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name ik-text--lg ik-text--semibold ik-mb-1">{{ product.name }}</h3>
                            <p class="product-category ik-text--sm ik-text--upper ik-mb-3">{{ product.category }}</p>
                            <div class="product-price">
                                <span v-if="product.originalPrice"
                                      class="original-price ik-text--md ik-text--strike">
                                    ${{ product.originalPrice }}
                                </span>
                                <span class="current-price ik-text--xl ik-text--semibold">${{ product.price }}</span>
                            </div>
                            <IkButton design="primary"
                                      class="add-to-cart-btn"
                                      size="md"
                                      flat
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
                        spacing="8">
                    <p class="footer-text ik-text--sm ik-ma-0">© 2025 Shop. All rights reserved.</p>
                    <IkFlex class="footer-links"
                            spacing="5">
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
import { IkChip } from '@ikol/ui-kit/components/IkChip';
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';

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
    background-color: var(--background-neutral-strong-default);
}

/* Header */
.header {
    background-color: var(--background-neutral-white-default);
    border-bottom: 1px solid var(--border-neutral-regular-default);
    padding: var(--s-4) 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--s-6);
}

.logo-text {
    color: var(--content-neutral-strong-default);
}

.nav-links {
    font-size: var(--text-md);
}

/* Main Content */
.main-content {
    flex: 1;
    padding: var(--s-12) 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--s-6);
}

.section-title {
    color: var(--content-neutral-strong-default);
}

/* Product Card */
.product-card {
    background-color: var(--background-neutral-white-default);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid var(--border-neutral-regular-default);
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-neutral-lg);
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background-color: var(--background-neutral-light-default);
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
    top: var(--s-3);
    right: var(--s-3);
    display: flex;
    align-items: center;
    gap: var(--s-1);
}

.product-info {
    padding: var(--s-5);
}

.product-name {
    color: var(--content-neutral-strong-default);
}

.product-category {
    color: var(--content-neutral-regular-default);
}

.product-price {
    display: flex;
    align-items: center;
    gap: var(--s-2);
    margin-bottom: var(--s-4);
}

.original-price {
    color: var(--content-neutral-light-default);
}

.current-price {
    color: var(--content-neutral-strong-default);
}

.add-to-cart-btn {
    width: 100%;
}

/* Footer */
.footer {
    background-color: var(--background-neutral-white-default);
    border-top: 1px solid var(--border-neutral-regular-default);
    padding: var(--s-8) 0;
    margin-top: var(--s-16);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--s-6);
}

.footer-text {
    color: var(--content-neutral-regular-default);
}

.footer-links {
    font-size: var(--text-sm);
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: var(--s-4);
    }

    .nav-links {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .section-title {
        font-size: var(--text-display-sm);
    }

    .footer-content {
        flex-direction: column;
        gap: var(--s-4);
        text-align: center;
    }
}
</style>
