<template>
    <div class="ecommerce-shop">
        <!-- Header Navigation -->
        <header class="header ik-py-7">
            <IkFlex class="header-content ik-px-6"
                    spacing="8"
                    grow_fixed_grow>
                <div class="logo">
                    <IkLink to="/">
                        <span class="logo-text ik-text--display-sm ik-text--bold"
                              :class="{ 'logo-text--dark': theme.is_dark.value }">
                            Xample
                        </span>
                    </IkLink>
                </div>
                <IkFlex class="nav-links ik-text--semibold"
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
                <IkFlex justify_end
                        spacing="3">
                    <ThemeSwitch />
                    <IkButton design="primary"
                              round>
                        Sign In
                    </IkButton>
                    <IkButton design="primary"
                              flat
                              icon="shopping-cart"
                              circle />
                </IkFlex>
            </IkFlex>
        </header>

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-wrapper ik-px-6 ik-py-10">
                <div class="hero-container">
                    <div class="hero-content">
                        <h1 class="hero-title ik-text--display-lg ik-text--bold ik-mb-4">Discover Quality Products
                        </h1>
                        <p class="hero-subtitle ik-text--xl ik-mb-8">Curated collection of premium items for your
                            everyday
                            needs</p>
                        <IkButton class="ik-mr-5"
                                  size="md"
                                  round
                                  inherit_color
                                  @click="scrollToProducts">
                            Shop Now
                        </IkButton>
                        <IkButton flat
                                  size="md"
                                  append_icon="arrow-right"
                                  round
                                  inherit_color
                                  @click="scrollToProducts">
                            Explore Collections
                        </IkButton>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <main class="main-content ik-py-12"
              id="products">
            <div class="container ik-px-6">
                <h2 class="section-title ik-text--display-xs ik-text--semibold ik-mb-8">Featured Products</h2>
                <IkGrid spacing_x="8"
                        spacing_y="8">
                    <IkGridItem xxs-12
                                xs-6
                                sm-4
                                md-3
                                v-for="product in products"
                                :key="product.id"
                                class="product-card ik-radius-6 ik-shadow--xl">
                        <div class="product-image-wrapper">
                            <IkImage :src="product.image"
                                     :alt="product.name"
                                     cover
                                     lazy
                                     class="product-image" />
                            <IkChip v-if="product.sale"
                                    design="primary"
                                    size="sm"
                                    class="sale-badge">
                                <IkIcon icon="tag"
                                        class="ik-mr-3"
                                        size_px="12" />
                                Sale
                            </IkChip>
                        </div>
                        <div class="product-info ik-pa-7">
                            <h3 class="product-name ik-text--lg ik-text--semibold ik-mb-2">{{ product.name }}</h3>
                            <p class="product-category ik-text--sm ik-text--upper ik-mb-5">{{ product.category }}</p>
                            <IkFlex inline
                                    spacing="3">
                                <IkRating :value="product.rating"
                                          size="sm"
                                          inline
                                          class="ik-mb-4"
                                          readonly />
                                <span class="ik-mb-3">{{ product.rating }}</span>
                            </IkFlex>
                            <div class="product-price ik-mb-7">
                                <span v-if="product.originalPrice"
                                      class="original-price ik-text--md ik-text--strike">
                                    ${{ product.originalPrice }}.00
                                </span>
                                <span class="current-price ik-text--xl ik-text--semibold">${{ product.price }}.00</span>
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
        <footer class="footer ik-py-10 ik-mt-16">
            <div class="container ik-px-6">
                <IkFlex class="footer-content"
                        spacing="8">
                    <p class="footer-text ik-text--sm ik-ma-0">© 2026 Xample. All rights reserved.</p>
                    <IkFlex class="footer-links ik-text--semibold"
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
import { IkRating } from '@ikol/ui-kit/components/IkRating';
import ThemeSwitch from './ThemeSwitch.vue';
import { provideTheme } from '@ikol/ui-kit/composables/theme';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    sale?: boolean;
    rating: number;
}

const theme = provideTheme({
    colors: {
        PRIMARY_50: 'f1f3ff',
        PRIMARY_100: 'e2e7ff',
        PRIMARY_200: 'c4d0ff',
        PRIMARY_300: 'a5b9ff',
        PRIMARY_400: '7f9fff',
        PRIMARY_500: '5689ff',
        PRIMARY_600: '0073ff',
        PRIMARY_700: '0054be',
        PRIMARY_800: '003a87',
        PRIMARY_900: '001f50',
        PRIMARY_950: '001234',
    },
    settings: {
        typography: {
            letter_spacing: 0.5,
        },
        fonts: {
            default: {
                family: 'Roboto',
                weights: { bold: 700, normal: 400, semibold: 600 },
            },
        },
    },
});

const products = ref<Product[]>([
    {
        id: 1,
        name: 'Minimalist Watch',
        category: 'Accessories',
        price: 129,
        originalPrice: 179,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        sale: true,
        rating: 4.5
    },
    {
        id: 2,
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 199,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        rating: 4.8
    },
    {
        id: 3,
        name: 'Leather Backpack',
        category: 'Bags',
        price: 249,
        originalPrice: 299,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        sale: true,
        rating: 4.3
    },
    {
        id: 4,
        name: 'Sunglasses',
        category: 'Accessories',
        price: 89,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Smart Speaker',
        category: 'Electronics',
        price: 149,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
        rating: 4.7
    },
    {
        id: 6,
        name: 'Canvas Sneakers',
        category: 'Footwear',
        price: 79,
        originalPrice: 99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        sale: true,
        rating: 4.4
    },
    {
        id: 7,
        name: 'Coffee Maker',
        category: 'Home',
        price: 159,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop',
        rating: 4.9
    },
    {
        id: 8,
        name: 'Desk Lamp',
        category: 'Home',
        price: 69,
        image: 'https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=400&h=400&fit=crop',
        rating: 4.2
    }
]);

const addToCart = (product: Product) => {
    console.log('Added to cart:', product.name);
    // Add to cart logic here
};

const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
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
    background-color: var(--background-neutral-strong-default);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
}

.logo-text {
    background: linear-gradient(45deg, blue 0%, cyan 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

.logo-text--dark {
    background: linear-gradient(45deg, rgb(123, 123, 255) 0%, cyan 100%);
    -webkit-background-clip: text;
}

.nav-links {
    font-size: var(--text-md);
}

/* Hero Section */
.hero-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    color: white;
}

.hero-container {
    --bg: 200;
    position: relative;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    background: linear-gradient(45deg, rgb(0, 0, 202) 0%, rgb(0, 184, 184) 100%);
    /* background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop'); */
    /* background-color: rgba(from var(--background-primary-solid-default) calc(r - var(--bg)) calc(g - var(--bg)) calc(b - var(--bg)) / 0.5); */
    background-size: cover;
    background-blend-mode: hue;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: var(--s-8);
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    padding: 0 var(--s-6);
    text-align: center;
}

.hero-title {
    color: var(--content-neutral-white-default);
}

.hero-subtitle {
    color: var(--content-neutral-white-default);
    opacity: 0.95;
}

/* Main Content */
.main-content {
    flex: 1;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    color: var(--content-neutral-strong-default);
}

/* Product Card */
.product-card {
    background-color: var(--background-neutral-white-default);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
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
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: saturate(10%);
}

.product-card:hover .product-image {
    transform: scale(1.05);
    filter: none;
}

.sale-badge {
    top: var(--s-3);
    right: var(--s-3);
    position: absolute;
    display: flex;
    align-items: center;
    gap: var(--s-1);
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
    border-top: 1px solid var(--border-neutral-light-default);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
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
        text-align: center;
    }
}
</style>
